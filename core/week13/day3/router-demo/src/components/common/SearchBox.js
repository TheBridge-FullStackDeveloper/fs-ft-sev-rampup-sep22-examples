import React from "react";

const SearchBox = ({ placeholder, value, onSearch }) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onSearch}
    />
  );
};

export default SearchBox;
