import { useState } from "react";

const RankTabs = () => {
  const [active, setActive] = useState("tasks");

  return (
    <div className="flex bg-gray-900 border border-orange-600/20 p-1 rounded-2xl">
      <button
        onClick={() => setActive("tasks")}
        className={`flex-1 py-4 rounded-xl font-semibold ${
          active === "tasks"
            ? "bg-primary text-white"
            : "text-muted-foreground"
        }`}
      >
        🏆 TASKS
      </button>

      <button
        onClick={() => setActive("invites")}
        className={`flex-1 py-4 rounded-xl font-semibold ${
          active === "invites"
            ? "bg-primary text-white"
            : "text-muted-foreground"
        }`}
      >
        👥 INVITES
      </button>
    </div>
  );
};

export default RankTabs;
