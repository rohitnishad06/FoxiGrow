import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex gap-2 my-4">
      {/* Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search tasks..."
          value={query}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-orange text-foreground placeholder-muted-foreground rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <Search className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground " />
      </div>

      {/* Search Button */}
      <button
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl w-12 h-12 flex items-center justify-center cursor-pointer"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;
