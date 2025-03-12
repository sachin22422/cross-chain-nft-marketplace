"use client"; // Enable client-side rendering

import { transferNFT } from "../../utils/aggLayer";

export default function Home() {
    async function handleNFTTransfer() {
        const fromChain = "polygon-mumbai";
        const toChain = "movement-labs-testnet";
        const tokenId = 1; // Replace with actual NFT ID
        const sender = "0x6f738d3b07879c058a9251e6c7f6e8b120b1b11b03e0e7b8748761c72750ba3a"; // Replace with your address
        const receiver = "0x08fE455Ceb456c0289D20fC6b00ecA83CA7aCec3"; // Replace with recipient's address

        await transferNFT(fromChain, toChain, tokenId, sender, receiver);
    }

    return (
        <div>
            <h1>Cross-Chain NFT Marketplace</h1>
            <button onClick={handleNFTTransfer}>Transfer NFT</button>
        </div>
    );
}
