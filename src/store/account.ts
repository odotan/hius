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
    const user = ref<RemovableRef<null| Account>>(
        useLocalStorage('account', null)
    );

    const signer = ref<any>(null)

    function logIn(address: string) {
        user.value =
            {
                id: uuid,
                walletAddress: address
            }
    }
    function logOut() {
        user.value = null;
    }

    return { user, signer, logIn, logOut };
})
