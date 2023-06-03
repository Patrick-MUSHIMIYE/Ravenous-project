import React from "react";

const SearchBar = () => {
  const sort = ["Best March", "Highest rated", "Most review"];
  return (
    <div>
      <div className="sort">
        {sort.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div>
        <input
          type="search"
          className="searchBar"
          placeholder="Search Business"
        />
        <input type="search" className="searchBar" placeholder="Where?" />
      </div>
      <button type="button" className="btn">
        Let's GO
      </button>
    </div>
  );
};
export default SearchBar;
