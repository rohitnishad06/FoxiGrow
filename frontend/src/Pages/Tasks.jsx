import React, { useState } from "react";
import { Search, RotateCcw, Clock } from "lucide-react";

import BottomNavigation from "../components/home/BottomNavigation";
import FilterTabs from "../components/task/FilterTabs";
import Header from "../components/task/Header";
import SearchBar from "../components/task/SearchBar";
import TaskCard from "../components/task/TaskCard";
import MustDoTask from "../components/home/MustDoTask";
import { MdMyLocation } from "react-icons/md";

const Tasks = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tasks = [
    {
      id: "1",
      title: "Bind Twitter Account",
      icon:  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>,
      rewards: [
        { amount: "+1", icon: "🪙", color: "text-yellow-400" },
        { amount: "+0.02", icon: "T", color: "text-green-400" },
      ],
      status: "must-do",
      category: "twitter",
    },
    {
      id: "2",
      title: "Subscribe charmjiujiang5556 on YouTube",
      icon: "🎯",
      rewards: [
        { amount: "+0.03", icon: "T", color: "text-green-400" },
        { amount: "+0.3", icon: "🪙", color: "text-yellow-400" },
      ],
      participants: [1299, 1687],
      status: "available",
      category: "twitter",
    },
    {
      id: "3",
      title: "Follow Jack on X",
      icon:  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>,
      rewards: [
        { amount: "+0.04", icon: "T", color: "text-green-400" },
        { amount: "+0.4", icon: "🪙", color: "text-yellow-400" },
      ],
      participants: [2938],
      status: "available",
      category: "twitter",
    },
    {
      id: "4",
      title: "Follow @FoxiGrow on X",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>,
      rewards: [
        { amount: "+0.04", icon: "T", color: "text-green-400" },
        { amount: "+0.4", icon: "🪙", color: "text-yellow-400" },
      ],
      participants: [77890],
      status: "available",
      category: "twitter",
    },
    {
      id: "5",
      title: "Join @FoxiGrow Channel",
      icon: "✈️",
      rewards: [
        { amount: "+0.02", icon: "T", color: "text-green-400" },
        { amount: "+0.2", icon: "🪙", color: "text-yellow-400" },
      ],
      participants: [66067],
      status: "available",
      category: "telegram",
    },
    {
      id: "6",
      title: "Follow Twitter Account POPBOX_RWA",
      icon:  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>,
      rewards: [
        { amount: "+0.04", icon: "T", color: "text-green-400" },
        { amount: "+0.4", icon: "🪙", color: "text-yellow-400" },
      ],
      participants: [366],
      status: "available",
      category: "twitter",
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      activeFilter === "all" || task.category === activeFilter;

    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery === "";

    return matchesFilter && matchesSearch;
  });

  const availableTasks = filteredTasks.filter(
    (task) => task.status === "available"
  );

  return (
    <div className=" min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[390px] relative">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="px-4">

          {/* Search */}
          <SearchBar onSearch={setSearchQuery} />

          {/* Filters */}
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Must Do */}
          <MustDoTask/>

          {/* Available */}
          {availableTasks.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-3 mb-2">
                <span className="text-xs flex justify-between items-center gap-3 font-semibold text-muted-foreground uppercase">
                  <MdMyLocation className="text-orange-700 text-sm" />Available
                </span>
                <span className="text-xs text-muted-foreground mr-4">
                  {availableTasks.length}
                </span>
              </div>

              <div className="space-y-3">
                {availableTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </>
          )}

          {/* No data */}
            <p className="text-center text-muted-foreground py-10">
              -------- No more data --------
            </p>
        
        </main>

        {/* Bottom Navigation */}
        <BottomNavigation/>
      </div>
    </div>
  );
};

export default Tasks;
