import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search jobs..."
      className="w-full p-2 border rounded mb-4"
    />
  );
};

export default SearchBar;
