import { Zap, Star, Clock } from "lucide-react";
import DailyTaskCard from "./DailyTaskCard";

const tasks = [
  {
    id: 1,
    title: "Complete 3 Tasks",
    description: "Complete 3 tasks today",
    reward: "+2 FG",
    current: 0,
    total: 3,
    icon: <Zap className="w-8 h-8 text-pink-400" />,
  },
  {
    id: 2,
    title: "Complete 10 Tasks",
    description: "Complete 10 tasks today",
    reward: "+5 FG",
    current: 0,
    total: 10,
    icon: <Star className="w-8 h-8 text-yellow-400" />,
  },
];

const DailyTasks = () => {
  return (
    <div className="px-4 pb-28">
      <div className="bg-gray-900 border border-orange-600/20 rounded-3xl p-6">
        <div className="flex justify-between mb-6">
          <div className="flex gap-3">
            <div className="bg-orange-500/20 p-3 rounded-full">
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Daily Tasks</h2>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Clock size={12} /> Daily Reset
              </p>
            </div>
          </div>
          <span className="text-orange-400 font-semibold">0/2</span>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <DailyTaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;
