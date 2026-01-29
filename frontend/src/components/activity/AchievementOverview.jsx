const AchievementOverview = () => {
  return (
    <div className="bg-gray-900 border border-orange-600/20 rounded-3xl p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-orange-500/20 rounded-full p-3">
          🏆
        </div>
        <h2 className="text-lg font-semibold text-white">
          Achievement Overview
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <StatCard
          value="0/20"
          label="Completed"
          color="text-orange-400"
        />
        <StatCard
          value="0"
          label="USDT Claimed"
          color="text-cyan-400"
        />
        <StatCard
          value="0"
          label="FG Claimed"
          color="text-yellow-400"
        />
      </div>
    </div>
  );
};

const StatCard = ({ value, label, color }) => {
  return (
    <div className="bg-slate-700/30 border border-slate-600/30 rounded-2xl p-4 text-center">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </div>
  );
};

export default AchievementOverview;
