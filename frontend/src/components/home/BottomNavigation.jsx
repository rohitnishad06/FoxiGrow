import React from "react";
import { Home, Settings, Trophy, Activity, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: "/", icon: Home, label: "HOME" },
  { id: "/task", icon: Settings, label: "TASKS" },
  { id: "/rank", icon: Trophy, label: "RANK" },
  { id: "/activity", icon: Activity, label: "ACTIVITY" },
  { id: "/profile", icon: User, label: "PROFILE" },
];

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-black border-t border-gray-800">
      <div className="flex items-center justify-around py-3 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.id;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="relative flex flex-col items-center px-4"
            >
              {/* Glow Circle */}
              {isActive && (
                <span className="absolute -top-2 w-10 h-10 rounded-full bg-orange-400/20 blur-md animate-pulse" />
              )}

              {/* Icon */}
              <Icon
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive
                    ? "-translate-y-1 text-orange-400 scale-110"
                    : "text-gray-400"
                }`}
              />

              {/* Label */}
              <span
                className={`text-[10px] mt-1 font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-orange-400 opacity-100"
                    : "text-gray-400 opacity-70"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
