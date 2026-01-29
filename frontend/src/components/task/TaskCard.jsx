import React from "react";

const TaskCard = ({ task, isMustDo = false }) => {
  return (
    <div className="relative bg-gray-900 border border-border rounded-2xl p-4 flex items-start gap-3">
      {/* Must Do Badge */}
      {isMustDo && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          MUST DO
        </div>
      )}

      {/* Icon */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-xl font-bold ${
          isMustDo ? "mt-6" : ""
        }`}
      >
        {task.icon}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isMustDo ? "mt-1" : ""}`}>
        <h3 className="font-semibold text-white text-sm leading-tight">
          {task.title}
        </h3>

        {/* Rewards */}
        <div className="flex items-center gap-3 mt-2">
          {task.rewards.map((reward, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <span className="text-xs">{reward.icon}</span>
              <span
                className={`text-xs font-semibold ${reward.color}`}
              >
                {reward.amount}
              </span>
            </div>
          ))}

          {/* Participants */}
          {task.participants && task.participants.length > 0 && (
  <>
    <div className="w-6 h-px bg-muted"></div>
    {task.participants.map((participant, idx) => (
      <span
        key={idx}
        className="text-xs text-muted-foreground"
      >
        {participant.count?.toLocaleString() ?? "0"}
      </span>
    ))}
  </>
)}

        </div>
      </div>

      {/* Start Button */}
      <button
        className="px-3 py-2 rounded-full text-xs bg-primary text-white font-bold hover:bg-primary/90 transition-colors cursor-pointer"
      >
        START
      </button>
    </div>
  );
};

export default TaskCard;
