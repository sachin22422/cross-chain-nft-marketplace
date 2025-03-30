"use client";

import { useState } from "react";
import { transferNFT } from "../../utils/aggLayer";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [chain, setChain] = useState("");
  const [result, setResult] = useState("");

  async function handleNFTTransfer() {
    const res = await transferNFT(from, to, tokenId, chain);
    setResult(`✅ Success! TxHash: ${res.txHash}`);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Cross-Chain NFT Marketplace</h1>

      <div className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm mb-1">From Address</label>
          <input
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">To Address</label>
          <input
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Token ID</label>
          <input
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Target Chain</label>
          <input
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
            value={chain}
            onChange={(e) => setChain(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4"
          onClick={handleNFTTransfer}
        >
          Transfer NFT
        </button>

{result && (
	  <div className="mt-4 w-full max-w-md p-4 bg-green-600 text-white rounded-lg shadow-md text-sm transition-all duration-300">
	    ✅ {result}
	  </div>
	)}
      </div>
    </main>
  );
}

