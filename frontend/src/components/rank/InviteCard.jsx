import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const InviteCard = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://t.me/FoxiGrowbot?start=ref_5053604840";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-orange-600/20 rounded-2xl p-4 space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white text-2xl">
          👥
        </div>
        <div>
          <h2 className="text-[16px] font-bold">Invite Friends</h2>
          <p className="text-xs text-muted-foreground  flex justify-between items-center">
            Invited 0<span className="text-green-400 ms-1"> (0 valid)</span>{" "}
            <span className="ms-1">. Commission</span>
            <span className=" text-green-400 w-4 h-4 rounded-full bg-teal-500/30 flex items-center justify-center text-xs font-bold ms-1">
              T
            </span>{" "}
            <span className="text-green-400 ps-1"> 0.0000</span>
          </p>
        </div>
      </div>

      <p className="text-primary text-sm font-bold flex items-center gap-2 cursor-pointer">
        10% Commission <FaRegQuestionCircle className="text-orange-800" />
      </p>

      <div className="flex gap-2">
        <input
          readOnly
          value={link}
          className="flex-1 bg-muted border border-border rounded-lg px-4 py-3 text-primary text-xs font-mono"
        />
        <button
          onClick={handleCopy}
          className="bg-primary text-white font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition"
        >
          {copied ? "✓" : "COPY"}
        </button>
      </div>

      <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer">
        <FaShareAlt size={16} />
        SHARE TO TELEGRAM
      </button>
    </div>
  );
};

export default InviteCard;
