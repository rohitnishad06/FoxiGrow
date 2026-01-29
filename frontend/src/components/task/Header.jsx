import React from "react";
import { Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black  px-4 py-4 flex items-center justify-between sticky top-0 z-10 rounded-6xl">
      <div>
        <h1 className="text-xl font-black tracking-tight">
          Task Center
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Complete tasks, earn rewards
        </p>
      </div>

      <button
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-3 py-2 flex items-center gap-1"
      >
        <Clock className="w-4 h-4" />
        <span className="text-xs font-bold cursor-pointer">HISTORY</span>
      </button>
    </header>
  );
};

export default Header;
