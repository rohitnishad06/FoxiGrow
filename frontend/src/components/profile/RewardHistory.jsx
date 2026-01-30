import { ChevronRight } from "lucide-react";
import { CiClock2 } from "react-icons/ci";

export default function RewardHistory() {
  const rewards = [
    { time: "1/28 21:14" },
    { time: "1/23 19:13" },
    { time: "1/20 16:58" },
  ];

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-bold flex items-center gap-2">
          <CiClock2 className="text-primary" size={16} />
          Reward History
        </h3>
        <span className=" flex items-center text-sm text-muted-foreground cursor-pointer">View More <ChevronRight size={16} /> </span>
      </div>

      {/* Card */}
      <div className="bg-gray-900 border border-border rounded-2xl divide-y divide-border">
        {rewards.map((r, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-4 py-3"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              {/* Coin */}
              <div className="w-10 h-10 rounded-full bg-yellow-400/15 flex items-center justify-center">
                <span className="text-xl">🪙</span>
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold leading-tight">
                  Check-in Reward (Day 1)
                </p>
                <p className="text-xs text-muted-foreground">
                  {r.time}
                </p>
              </div>
            </div>

            {/* Right */}
            <span className="text-yellow-400 font-bold text-sm">
              +1 FG
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
