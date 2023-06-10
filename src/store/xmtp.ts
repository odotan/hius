import { defineStore } from 'pinia';
import { Client, Conversation } from '@xmtp/xmtp-js';
import { Wallet } from 'ethers';
import { ref, Ref } from 'vue';

interface Message {
    id: string;
    senderAddress: string;
    content: string;
}

export const useXmtpStore =  defineStore('xmtp', () => {
    const messages: Ref<Message[]> = ref([]);
    const conversation: Ref<Conversation | null> = ref(null);

    async function fetchMessages() {
        if (conversation.value) {
            messages.value = await conversation.value.messages();
        }
    }

    async function sendMessage(message: string) {
        if (conversation.value) {
            await conversation.value.send(message);
        }
    }

    async function listenForMessages() {
        if (conversation.value) {
            for await (const message of await conversation.value.streamMessages()) {
                console.log(`[${message.senderAddress}]: ${message.content}`);
                messages.value.push(message);
            }
        }
    }

    // Setup the XMTP client and conversation
    async function setupXmtp() {
        const wallet = Wallet.createRandom();
        const xmtp = await Client.create(wallet);
        const newConversation = await xmtp.conversations.newConversation(
            '0x3F11b27F323b62B159D2642964fa27C46C841897'
        );

        conversation.value = newConversation;
        await fetchMessages();
        await listenForMessages();
    }

    setupXmtp();

    return {
        messages,
        sendMessage,
    };
});
