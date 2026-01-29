import React from "react";
import { Globe } from "lucide-react";
import img1 from "../../assets/avatar.jpg";

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-orange-600">
          <img
            src={img1}
            alt="User avatar"
            className="w-full h-full object-cover object-[center_15%]"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col">
          <span className="text-white font-semibold text-lg">
            Rohit
          </span>

          <div className="flex items-center gap-2">
            <span className="bg-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-2xl">
              LV.1
            </span>

            <div className="w-8 h-0.5 bg-gray-700 rounded-full" />

            <span className="text-yellow-400 text-xs font-medium">
              Newbie
            </span>
          </div>
        </div>
      </div>

      {/* Globe Icon */}
      <button className="w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center bg-orange-500/20 text-orange-400 hover:text-orange transition-colors cursor-pointer">
        <Globe className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UserProfile;
