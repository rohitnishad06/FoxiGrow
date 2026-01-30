import { X } from "lucide-react";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function NotificationSettings({ onClose }) {
  const [settings, setSettings] = useState({
    taskComplete: true,
    rewardReceived: true,
    newTask: true,
    checkIn: true,
    inviteSuccess: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80">
      {/* Modal */}
      <div className="w-full max-w-[390px] bg-gray-900 rounded-t-3xl border border-border p-5 animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <h2 className="text-lg font-bold">Notification Settings</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-orange-600/20 flex items-center justify-center cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="divide-y divide-border">
          <Item
            icon="✅"
            title="Task Complete"
            desc="Notify when task is verified"
            enabled={settings.taskComplete}
            onToggle={() => toggle("taskComplete")}
          />

          <Item
            icon="🪙"
            title="Reward Received"
            desc="Notify when rewards are received"
            enabled={settings.rewardReceived}
            onToggle={() => toggle("rewardReceived")}
          />

          <Item
            icon="🎯"
            title="New Task"
            desc="Notify when new tasks are available"
            enabled={settings.newTask}
            onToggle={() => toggle("newTask")}
          />

          <Item
            icon="🎁"
            title="Check-in Reminder"
            desc="Daily check-in reminder"
            enabled={settings.checkIn}
            onToggle={() => toggle("checkIn")}
          />

          <Item
            icon="👥"
            title="Invite Success"
            desc="Notify when friends accept invite"
            enabled={settings.inviteSuccess}
            onToggle={() => toggle("inviteSuccess")}
          />
        </div>
      </div>
    </div>
  );
}

function Item({ icon, title, desc, enabled, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="flex items-center justify-between py-4 cursor-pointer active:scale-[0.99] transition"
    >
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-lg">
          {icon}
        </div>

        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>

      {/* Prevent double toggle when clicking switch */}
      <div onClick={(e) => e.stopPropagation()}>
        <ToggleSwitch enabled={enabled} onChange={onToggle} />
      </div>
    </div>
  );
}

