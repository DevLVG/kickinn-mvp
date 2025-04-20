'use client';

import { Wallet } from 'lucide-react';

export default function WalletConnect({ isConnected, onConnect }) {
  const handleConnect = () => {
    // Qui in futuro collegherai un wallet reale (es. MetaMask)
    onConnect(!isConnected);
  };

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={handleConnect}
        className={`inline-flex items-center space-x-2 text-sm ${
          isConnected
            ? 'text-[#4F6F6C]'
            : 'text-gray-600 hover:text-[#4F6F6C]'
        }`}
      >
        <Wallet className="w-4 h-4" />
        <span>
          {isConnected ? 'Wallet Connected' : 'Connect Wallet (Optional)'}
        </span>
      </button>
    </div>
  );
}
