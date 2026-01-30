import { Bell, ChevronRight } from "lucide-react";

export default function NotificationRow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 border border-border rounded-xl p-4 flex justify-between cursor-pointer"
    >
      <div className="flex gap-3 items-center">
        <Bell className="text-yellow-400" />
        <span className="font-semibold">Notification Settings</span>
      </div>
      <ChevronRight size={18} />
    </div>
  );
}
