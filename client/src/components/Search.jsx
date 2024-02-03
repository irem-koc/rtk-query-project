import React, { useEffect, useState } from "react";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    handleSearch(search);
  }, [handleSearch, search]);
  return (
    <form>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="search"
        name="search"
        placeholder="search"
        className="outline-none border mr-2 pl-2 py-1 rounded-sm"
      />
    </form>
  );
};

export default Search;
