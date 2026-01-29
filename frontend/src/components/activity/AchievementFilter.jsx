const AchievementFilter = ({ value, onChange }) => {
  const filters = [
    { id: "all", label: "All" },
    { id: "social", label: "Social" },
    { id: "earning", label: "Earning" },
  ];

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChange(filter.id)}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            value === filter.id
              ? "bg-orange-500 text-white"
              : "border border-border text-muted-foreground"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default AchievementFilter;
