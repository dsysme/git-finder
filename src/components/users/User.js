import React, { Fragment, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

function User() {
  const { username } = useParams();
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(username);
    githubContext.getUserRepos(username);
    // eslint-disable-next-line
  }, []);

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = githubContext.user;
    return (
      <Fragment>
        <div className="card grid-2">
          <Link to="/" className="btn btn-light">
            Back to search...
          </Link>
          <div>
            Hireable:
            {hireable ? (
              <i className="fas fa-check text-success"></i>
            ) : (
              <i className="fas fa-times-circle text-danger"></i>
            )}
          </div>
        </div>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="avatar"
              className="round-center"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio:</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </ul>
            <ul>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </ul>
            <ul>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Repos: {public_repos}</div>
          <div className="badge badge-dark">Gists: {public_gists}</div>
        </div>
        <div className="card">
          {githubContext.repos.length && (
            <Repos userRepos={githubContext.repos} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default User;
