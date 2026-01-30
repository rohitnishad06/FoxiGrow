import img1 from "../../assets/avatar.jpg";

export default function UserCard() {
  return (
    <div className="bg-gray-900 border border-border rounded-3xl p-6 text-center relative overflow-hidden">
      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-3">
        <img
          src={img1}
          alt="avatar"
          className="w-full h-full rounded-2xl object-cover relative z-10"
        />
        <div className="absolute inset-0 rounded-2xl blur-xl bg-orange-400/40" />
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold">Rohit</h2>

      {/* Verified */}
      <span className="inline-block mt-2 px-4 py-1 text-xs rounded-full bg-green-500/20 text-green-400 font-semibold">
        Verified
      </span>

      {/* Level */}
      <div className="mt-5 bg-orange-600/10 border border-border rounded-2xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-orange-400 font-semibold">
            Lv.1 <span className="text-yellow-400 ml-1">Newbie</span>
          </span>
          <span className="text-muted-foreground">0/3</span>
        </div>

        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="w-0 h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
