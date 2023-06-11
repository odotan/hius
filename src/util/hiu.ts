import {bytesToBase64, sha256} from "./common";
import axios from "axios";

interface HiuMessage {
    id: string;
    senderAddress: string;
    timestamp: Date;
    verification: string;
}
export async function hiu (){
    // Step 1: generate seed
    const array = new Uint32Array(10);
    self.crypto.getRandomValues(array);
    const seed = array.join('');
    console.log(seed)

    // Step 2: Use seed to compute a hash
    async function generateVerification() {
        const startTime = Date.now();
        // generate a batch of hashes
        const salt = Date.now().toString();
        const hashes = new Array(100).fill(0).map(() => getHash(seed + salt));
        const elapsed = (Date.now() - startTime) / 1000
    }


    async function getHash(i:string) {
        // console.log(i)
        // const array = new Uint32Array(10);
        // self.crypto.getRandomValues(array);
        const hash = await sha256(i);
        console.log(hash)
        result.value = bytesToBase64(hash);
        return result.value
    }

    function checkHash(str:string): boolean {
        // return true if the string contains "HiU"
        const prefix = "hi"
        return str.includes(prefix)
    }


   async function getLatestBlockHash() {
        const apiKey = "5TNZQS5Z9R2R7F5VZ46V4IN2SAK7VPFJEV"
        const latestBlockUrl = `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${apiKey}`;
        const response = await axios.get(latestBlockUrl);

        const latestBlockNumber = response.data.result
        const blockUrl = `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${latestBlockNumber}&boolean=true&apikey=${apiKey}`;
        const response2 = await axios.get(blockUrl);
        return response2.data.result.hash
    }

}
