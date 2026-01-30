import { X, ChevronRight } from "lucide-react";

export default function TwitterBinding() {
  return (
    <div className="bg-gray-900 border border-border rounded-xl p-4 flex justify-between cursor-pointer">
      <div className="flex gap-3 items-center">
        <X className="text-blue-400" />
        <span className="font-semibold">Twitter Binding</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        Not Bound <ChevronRight size={16} />
      </div>
    </div>
  );
}
