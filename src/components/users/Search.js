import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function Search({ searchForUsers, clearUsers, showClearButton, setAlert }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChanged = (e) => setSearchText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      console.log("in handleSubmit");
      setAlert("Please enter text", "light");
    } else {
      searchForUsers(searchText);
      setSearchText("");
    }
  };

  return (
    <Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="search users..."
          value={searchText}
          onChange={handleSearchTextChanged}
        />
        <input
          className="btn btn-dark btn-block"
          type="submit"
          value="Search"
          id="search"
        />
      </form>
      {showClearButton && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
}

Search.propTypes = {
  searchForUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
};

export default Search;
