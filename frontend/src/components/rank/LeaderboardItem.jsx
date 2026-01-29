const LeaderboardItem = ({ user }) => {
  return (
    <div className="bg-gray-900 border border-orange-600/20 rounded-xl p-4 flex items-center gap-3">
      <div className="text-2xl">{user.medal}</div>

      <img
        src={user.avatar}
        alt={user.name}
        className="w-12 h-12 rounded-lg object-cover"
      />

      <div className="flex-1">
        <p className="font-bold">{user.name}</p>
        <p className="text-xs text-muted-foreground">
          {user.tasks} tasks completed
        </p>
      </div>

      <p className="font-bold text-yellow-400">
        {user.earned}
      </p>
    </div>
  );
};

export default LeaderboardItem;
