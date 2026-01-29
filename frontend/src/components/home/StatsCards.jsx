import React from "react";
import { CheckCircle2 } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {/* USDT Card */}
      <div className="bg-gray-900 rounded-xl p-2 h-[105px] flex flex-col items-center border border-b-green-400/60">
        <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mb-2">
          <span className="text-green-400 font-bold text-sm">T</span>
        </div>
        <span className="text-green-400 text-xl font-bold mb-2">0.00</span>
        <span className="text-gray-400 text-[10px]">USDT</span>
      </div>

      {/* FG Coin Card */}
      <div className="bg-gray-900 rounded-xl p-2 h-[105px] flex flex-col items-center border  border-b-amber-400/60">
        <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
          <span className="text-amber-400 text-lg">🪙</span>
        </div>
        <span className="text-amber-400 text-xl font-bold mb-2">0</span>
        <span className="text-gray-400 text-[10px]">FG Coin</span>
      </div>

      {/* Completed Card */}
      <div className="bg-gray-900 rounded-xl p-2 h-[105px] flex flex-col items-center border  border-b-orange-400/60">
        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
          <CheckCircle2 className="w-5 h-5 text-orange-400" />
        </div>
        <span className="text-orange-400 text-xl font-bold mb-2">0</span>
        <span className="text-gray-400 text-[10px]">Completed</span>
      </div>
    </div>
  );
};

export default StatsCards;
