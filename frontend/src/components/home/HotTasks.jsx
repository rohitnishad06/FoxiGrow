import React from "react";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";


/* Dummy Task Data */
const tasks = [
  {
    id: 1,
    icon: "x",
    title: "Follow Jack on X",
    tokenReward: 0.04,
    coinReward: 0.4,
    progress: 4175,
  },
  {
    id: 2,
    icon: "x",
    title: "Follow Twitter Account ABDAO",
    tokenReward: 0.04,
    coinReward: 0.4,
    progress: 7174,
  },
  {
    id: 3,
    icon: "x",
    title: "Follow FoxiGrow on X",
    tokenReward: 0.04,
    coinReward: 0.4,
    progress: 79085,
  },
];

/* Task Icon */
const TaskIcon = ({ type }) => {

  if (type === "x") {
    return (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26..." />
      </svg>
    </div>
  );
};

/* Task Card */
const TaskCard = ({ task }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between border border-gray-800">
      <div className="flex items-center gap-3">
        <TaskIcon type={task.icon} />

        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm">
            {task.title}
          </span>

          <div className="flex items-center gap-3 mt-1 flex-wrap">
            {/* Token Reward */}
            <span className="text-teal-400 text-sm flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-teal-500/30 flex items-center justify-center text-xs font-bold">
                T
              </span>
              +{task.tokenReward}
            </span>

            {/* Coin Reward */}
            <span className="text-amber-400 text-sm">
              🪙 +{task.coinReward}
            </span>

            {/* Progress */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-1.5 bg-red-500 rounded-full" />
              <span className="text-gray-400 text-xs">
                {task.progress}
              </span>
            </div>

            {/* Participants */}
            {task.participants && (
              <span className="text-gray-400 text-xs flex items-center gap-1">
                🔥 {task.participants}
              </span>
            )}
          </div>
        </div>
      </div>

      <button className="px-5 py-2 rounded-full bg-orange-400 text-black font-semibold text-sm hover:bg-orange-500 transition-colors cursor-pointer">
        START
      </button>
    </div>
  );
};

/* Main Component */
const HotTasks = () => {

  const navigate = useNavigate()
  
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Flame className="w-5 h-5 text-yellow-400" />
        <span className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
          Hot Tasks
        </span>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {/* View All */}
      <button className="w-full text-center text-yellow-400 font-semibold py-2 cursor-pointer" onClick={()=>navigate('/task')}>
        View All Tasks →
      </button>
    </div>
  );
};

export default HotTasks;
