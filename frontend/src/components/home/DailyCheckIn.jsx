import React from "react";
import { Calendar } from "lucide-react";

const DailyCheckIn = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between border border-yellow-100/20">
      <div className="flex items-center gap-3">
        {/* Calendar Icon */}
        <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
          <Calendar className="w-6 h-6 text-yellow-400" />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-white font-bold text-sm">Daily Check-in</span>
          <span className="text-gray-400 text-xs">Check In</span>
          <span className="text-yellow-400 bg-yellow-500/40 text-white text-[10px] font-medium px-2 py-0.5 rounded-2xl mt-1 w-fit">
            +1 FG Coin
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-3 rounded-lg bg-gray-800 text-gray-400 text-[10px] font-medium hover:bg-gray-700 transition-colors cursor-pointer">
          Make Up
        </button>
        <button className="px-4 py-3 rounded-lg bg-yellow-500 text-black text-[10px] font-bold hover:bg-yellow-600 transition-colors cursor-pointer">
          CHECK IN
        </button>
      </div>
    </div>
  );
};

export default DailyCheckIn;
