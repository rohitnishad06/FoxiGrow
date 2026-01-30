import { useState } from "react";
import BottomNavigation from "../components/home/BottomNavigation";
import ProfileHeader from "../components/profile/ProfileHeader";
import WalletCard from "../components/profile/WalletCard";
import RewardHistory from "../components/profile/RewardHistory";
import TwitterBinding from "../components/profile/TwitterBinding";
import NotificationRow from "../components/profile/NotificationRow";
import UserCard from "../components/profile/UserCard";
import NotificationSettings from "../components/profile/NotificationSettings";


export default function Profile() {
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <div className="min-h-screen bg-black text-foreground max-w-[390px] mx-auto">
      <ProfileHeader />

      <div className="px-4 space-y-5 pb-28">
        <UserCard />
        <WalletCard />
        <RewardHistory />
        <TwitterBinding />
        <NotificationRow onClick={() => setOpenNotification(true)} />
      </div>

      <BottomNavigation />

      {openNotification && (
        <NotificationSettings onClose={() => setOpenNotification(false)} />
      )}
    </div>
  );
}
