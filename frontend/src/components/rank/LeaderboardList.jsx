import LeaderboardItem from "./LeaderboardItem";


const data = [
  {
    rank: 1,
    name: "ay***i",
    avatar:
      "https://images.unsplash.com/photo-1535713566543-5f51ddd16421?w=48&h=48&fit=crop",
    tasks: 3,
    earned: 200.13,
    medal: "🥇",
  },
  {
    rank: 2,
    name: "Be***e",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop",
    tasks: 17,
    earned: 68.2,
    medal: "🥈",
  },
  {
    rank: 3,
    name: "In***1",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop",
    tasks: 16,
    earned: 64.13,
    medal: "🥉",
  },
];

const LeaderboardList = () => {
  return (
    <div className="space-y-2 bg-black ">
      {data.map((user) => (
        <LeaderboardItem key={user.rank} user={user}/>
      ))}
    </div>
  );
};

export default LeaderboardList;
