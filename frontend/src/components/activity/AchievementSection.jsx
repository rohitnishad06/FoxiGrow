import { useState } from "react";
import AchievementFilter from "./AchievementFilter";
import AchievementCard from "./AchievementCard";
import AchievementOverview from "./AchievementOverview";

const achievements = [
  {
    id: 1,
    title: "First Invitation",
    description:
      "Invite 3 valid users (users must complete at least 10 tasks and bind a Twitter account)",
    usdt: "+0.5 USDT",
    fg: "+5 FG",
    current: 0,
    total: 3,
    icon: "👋",
    category: "social",
  },
  {
    id: 2,
    title: "Social Butterfly",
    description:
      "Invite 50 friends (users must complete at least 10 tasks and bind their Twitter account)",
    usdt: "+2 USDT",
    fg: "+20 FG",
    current: 0,
    total: 50,
    icon: "🦋",
    category: "social",
  },
  {
    id: 3,
    title: "Invite Master",
    description:
      "Invite 200 friends (users must have completed at least 10 tasks and linked their Twitter account)",
    usdt: "+10 USDT",
    fg: "+80 FG",
    current: 0,
    total: 200,
    icon: "⭐",
    category: "social",
  },
  {
    id: 4,
    title: "Talent Scout",
    description:
      "The invited users have collectively earned 100 USDT through completing tasks.",
    usdt: "+5 USDT",
    fg: "+50 FG",
    current: 0,
    total: 100,
    icon: "🌟",
    category: "earning",
  },
  {
    id: 5,
    title: "Referral Pro",
    description:
      "The invited users have collectively earned 1,000 USDT through their tasks.",
    usdt: "+25 USDT",
    fg: "+200 FG",
    current: 0,
    total: 1000,
    icon: "🟣",
    category: "earning",
  },
];

const AchievementSection = () => {
  const [category, setCategory] = useState("all");

  const filteredAchievements =
    category === "all"
      ? achievements
      : achievements.filter(
          (item) => item.category === category
        );

  return (
    <div className="px-4 pb-28 space-y-4">
      {/* Overview */}
      <AchievementOverview />

      {/* Filter */}
      <AchievementFilter
        value={category}
        onChange={setCategory}
      />

      {/* Achievement Cards */}
      {filteredAchievements.map((item) => (
        <AchievementCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AchievementSection;
