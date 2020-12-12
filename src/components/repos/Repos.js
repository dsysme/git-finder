import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

function Repos({ userRepos }) {
  return userRepos.map((repo) => (
    <RepoItem repo={repo} key={repo.id}></RepoItem>
  ));
}

Repos.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default Repos;
