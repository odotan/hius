// long functions here
import { encode } from 'js-base64';
export function bytesToBase64(str: string): string {
    return encode(str)
}

export async function sha256(message: string) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    return hash2hex(hashArray)
}

export function hash2hex(hashArray: number[]) {
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(""); // convert bytes to hex string
    return hashHex;
}
