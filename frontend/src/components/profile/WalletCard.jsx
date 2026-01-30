import { Wallet } from "lucide-react";

export default function WalletCard() {
  return (
    <div className="bg-gray-900 border border-border rounded-3xl p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center">
          <Wallet size={18} className="text-orange-400" />
        </div>
        <h3 className="font-bold text-lg">My Wallet</h3>
      </div>

      {/* Balance */}
      <div className="flex items-end gap-1">
        <span className="text-4xl font-bold">$0</span>
        <span className="text-gray-400 text-lg">.000</span>
        <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md">
          USDT
        </span>
      </div>

      {/* Button */}
      <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:opacity-90 py-3 rounded-xl font-bold tracking-wide cursor-pointer">
        WITHDRAW
      </button>
    </div>
  );
}
