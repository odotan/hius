import { defineStore } from 'pinia';
import { ref} from 'vue';
import {RemovableRef, useLocalStorage, useMouse, usePreferredDark} from '@vueuse/core'

export interface Account {
    id: string;
    walletAddress?: string;
    relationships?: [
        {
            id: string;
        }
    ];
    score?: number;
    content?: string;
}
export const useAccountStore = defineStore('account', () => {
    let uuid = crypto.randomUUID();
    const user = ref<RemovableRef<Account>>(
        useLocalStorage('account', {
            id: uuid,
        })
    );
    const signer = ref<any>(null)

    function setAddress(address: string) {
        user.value.walletAddress = address;
    }
    function setSigner(a: string) {
        signer.value = a;
    }

    return { user, signer, setAddress, setSigner };
})
