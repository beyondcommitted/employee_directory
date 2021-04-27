import React from "react";

const SearchBar = ({ handleChange }) => {
  return (
    <form>
      <input
        className="form-control"
        placeholder="Search By Last Name"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
