import React from "react";
import { RotateCcw } from "lucide-react";

const FilterTabs = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: "all", label: "ALL" },
    { id: "telegram", label: "TG TASKS", icon: "📱" },
    { id: "twitter", label: "TWITTER TASKS", icon: "❌" },
  ];

  return (
    <div className="flex items-center justify-between gap-1 my-4 overflow-x-auto pb-2">
      {/* Tabs */}
      <div className="flex gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-2 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground border border-primary"
                  : "bg-gray-900 border border-muted text-muted-foreground hover:border-border"
              }`}
            >
              {filter.icon && <span className="mr-1">{filter.icon}</span>}
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Refresh Button */}
      <button
        className=" bg-orange-400/20 rounded-2xl border border-muted w-10 h-10 flex items-center justify-center flex-shrink-0 hover:bg-orange-900 cursor-pointer"
        title="Refresh"
      >
        <RotateCcw className="w-5 h-5 text-primary" />
      </button>
    </div>
  );
};

export default FilterTabs;
