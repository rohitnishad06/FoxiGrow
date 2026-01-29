import { Zap, Trophy, Clock } from "lucide-react";

const ActivityTabs = ({ active, onChange }) => {
  const tabs = [
    { id: "daily", label: "DAILY", icon: <Zap size={16} /> },
    { id: "achieve", label: "ACHIEVE", icon: <Trophy size={16} /> },
    { id: "events", label: "EVENTS", icon: <Clock size={16} /> },
  ];

  return (
    <div className="px-4 pb-6">
      <div className="flex gap-1 bg-gray-900 p-1 rounded-2xl border border-orange-600/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 ${
              active === tab.id
                ? "bg-orange-500 text-white"
                : "text-gray-400"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityTabs;
