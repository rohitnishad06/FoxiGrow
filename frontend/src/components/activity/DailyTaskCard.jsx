const DailyTaskCard = ({ task }) => {
  const progress = (task.current / task.total) * 100;

  return (
    <div className="bg-gray-900 border border-slate-600/30 rounded-2xl p-4 flex gap-4">
      <div className="mt-1">{task.icon}</div>

      <div className="flex-1">
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-xs text-gray-400">{task.description}</p>

        <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-orange-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="text-right text-xs">
        <p className="text-yellow-300 font-semibold">{task.reward}</p>
        <p className="text-gray-400">
          {task.current}/{task.total}
        </p>
      </div>
    </div>
  );
};

export default DailyTaskCard;
