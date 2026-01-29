import BottomNavigation from "../components/home/BottomNavigation";
import InviteCard from "../components/rank/InviteCard";
import LeaderboardList from "../components/rank/LeaderBoardList";
import MyRankCard from "../components/rank/MyRankCard";
import RankHeader from "../components/rank/RankHeader";
import RankTabs from "../components/rank/RankTabs";


const Rank = () => {
  return (
    <div className="bg-black text-white flex justify-center">
      <div className="w-full max-w-[390px] relative">
        <RankHeader />

        <main className="px-4 pb-28 space-y-4">
          <InviteCard />
          <RankTabs />
          <MyRankCard />
          <LeaderboardList />
        </main>

        <BottomNavigation active="rank" />
      </div>
    </div>
  );
};

export default Rank;
