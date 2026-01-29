import BottomNavigation from "../components/home/BottomNavigation";
import DailyCheckIn from "../components/home/DailyCheckIn";
import HotTasks from "../components/home/HotTasks";
import MustDoTask from "../components/home/MustDoTask";
import OfficialGuide from "../components/home/OfficialGuide";
import StatsCards from "../components/home/StatsCards";
import UserProfile from "../components/home/UserProfile";


const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[390px] relative">
        {/* Main Content */}
        <div className="px-4 py-4 space-y-4">
          <UserProfile />
          <StatsCards />
          <DailyCheckIn />  
          <OfficialGuide />
          <MustDoTask />
          <HotTasks />
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
