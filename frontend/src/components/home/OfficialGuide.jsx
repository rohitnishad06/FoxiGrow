import React from "react";
import { FileText, ChevronRight } from "lucide-react";

const OfficialGuide = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between border border-blue-800/20 cursor-pointer hover:bg-gray-800 transition-colors">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-400" />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-white font-semibold">
            Official Guide
          </span>
          <span className="text-gray-400 text-sm">
            Learn how to earn rewards
          </span>
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  );
};

export default OfficialGuide;
