import React, { useState } from "react";

function SearchBar ({ onSearch }) {
  const [handle, setHandle] = useState("");

  const handleSearch = () => {
    if (!handle.trim()) return; // Prevent empty searches
    
      onSearch(handle);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Codeforces Handle"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
      />
      
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;