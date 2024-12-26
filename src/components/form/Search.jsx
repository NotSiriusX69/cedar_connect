import React from "react";

const Search = ({ name, placeholder, onChange, value }) => {
  return (
    <div className="flex flex-row justify-between items-center w-96">
      <input
        type="search"
        name={name}
        id={name}
        placeholder={placeholder}
        className="input-small input-search "
        value={value}
        onChange={onChange}
      />
      {/* <img src="src\assets\images\search.png" alt="search" className="w-6 h-6 " /> */}
    </div>
  );
};

export default Search;
