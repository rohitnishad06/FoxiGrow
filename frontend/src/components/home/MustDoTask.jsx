import React from "react";

const MustDoTask = () => {
  return (
    <div>
      {/* Label */}
      <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
        MUST DO
      </span>

      {/* Task Card */}
      <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between border border-gray-800 mt-2 cursor-pointer">
        <div className="flex items-center gap-3">
          {/* X Logo */}
          <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <span className="text-white font-semibold">
              Bind Twitter Account
            </span>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-amber-400 text-sm">
                🪙 +1
              </span>

              <span className="text-teal-400 text-sm flex items-center gap-1">
                <span className="w-4 h-4 rounded-full bg-teal-500/30 flex items-center justify-center text-xs font-bold">
                  T
                </span>
                +0.02
              </span>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button className="px-3 py-2 rounded-full text-xs bg-blue-400 text-white font-bold hover:bg-blue-500 transition-colors cursor-pointer">
          START
        </button>
      </div>
    </div>
  );
};

export default MustDoTask;
