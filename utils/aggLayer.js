// utils/aggLayer.js

// Mock class (in case someone imports AggLayerSDK)
export class AggLayerSDK {
  constructor() {
    console.log("Mock AggLayerSDK initialized");
  }

  async sendCrossChainNFT(...args) {
    console.log("Mock cross-chain transfer:", args);
    return { success: true, txHash: "0xMOCKED_TX_HASH" };
  }
}

// ✅ MOCK FUNCTION for transferNFT
export async function transferNFT(from, to, tokenId, chain) {
  console.log("Mock transferNFT called with:", { from, to, tokenId, chain });

  return {
    success: true,
    txHash: "0xMOCKED_TX_HASH_FOR_TRANSFERNFT"
  };
}
