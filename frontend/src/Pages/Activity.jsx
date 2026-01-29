import { useState } from "react";
import ActivityHeader from "../components/activity/ActivityHeader";
import ActivityTabs from "../components/activity/ActivityTabs";
import AchievementSection from "../components/activity/AchievementSection";
import DailyTasks from "../components/activity/DailyTasks";
import EventsSection from "../components/activity/EventsSection";
import BottomNavigation from "../components/home/BottomNavigation";


const Activity = () => {
  const [activeTab, setActiveTab] = useState("daily");

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[390px] relative">
        <ActivityHeader />
        <ActivityTabs active={activeTab} onChange={setActiveTab} />

        {activeTab === "daily" && <DailyTasks />}
        {activeTab === "achieve" && <AchievementSection />}
        {activeTab === "events" && <EventsSection />}

        <BottomNavigation/>
      </div>
    </div>
  );
};

export default Activity;
