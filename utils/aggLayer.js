import { AggLayerSDK } from "@polygon/agg-layer-sdk";
import { ethers } from "ethers";

// Initialize the AggLayer SDK
const sdk = new AggLayerSDK({
    apiKey: "0x08fE455Ceb456c0289D20fC6b00ecA83CA7aCec3", // Replace this with your API key
});

/**
 * Transfers an NFT cross-chain via Polygon AggLayer
 * @param {string} fromChain - Source blockchain (e.g., "polygon-mumbai")
 * @param {string} toChain - Destination blockchain (e.g., "movement-labs-testnet")
 * @param {number} tokenId - NFT Token ID
 * @param {string} sender - Sender's address
 * @param {string} receiver - Recipient's address
 */
export async function transferNFT(fromChain, toChain, tokenId, sender, receiver) {
    try {
        console.log(`Transferring NFT ${tokenId} from ${fromChain} to ${toChain}...`);

        const tx = await sdk.transferNFT({
            fromChain,
            toChain,
            tokenId,
            sender,
            receiver,
        });

        console.log("Transaction sent:", tx);
        await tx.wait(); // Wait for confirmation

        console.log("NFT successfully transferred!");
    } catch (error) {
        console.error("Error transferring NFT:", error);
    }
}
