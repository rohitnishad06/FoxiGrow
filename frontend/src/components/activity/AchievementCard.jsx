const AchievementCard = ({ item }) => {
  const progress = (item.current / item.total) * 100;

  return (
    <div className="bg-gray-900 border border-orange/20 rounded-3xl p-5">
      <div className="flex gap-4 mb-3">
        <div className="text-3xl">{item.icon}</div>
        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-xs text-gray-400">{item.description}</p>
          <p className="text-xs mt-2">
            <span className="text-cyan-400">{item.usdt}</span>{" "}
            <span className="text-yellow-300">{item.fg}</span>
          </p>
        </div>
      </div>

      <div className="w-full bg-slate-900/50 h-1.5 rounded-full">
        <div
          className="bg-orange-500 h-full rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 text-right mt-1">
        {item.current}/{item.total}
      </p>
    </div>
  );
};

export default AchievementCard;
