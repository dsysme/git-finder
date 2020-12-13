import React, { Fragment, useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

function Search() {
  const [searchText, setSearchText] = useState("");
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const handleSearchTextChanged = (e) => setSearchText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alertContext.setAlert("Please enter text", "light");
    } else {
      githubContext.searchForUsers(searchText);
      setSearchText("");
    }
  };

  const showClearButton = githubContext.users.length > 0;

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
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </Fragment>
  );
}

export default Search;
