import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

function Users() {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  } else
    return (
      <div style={userStyle}>
        {githubContext.users.map((user) => {
          const { id, login, html_url, avatar_url } = user;
          return (
            <UserItem
              id={id}
              key={id}
              login={login}
              html_url={html_url}
              avatar_url={avatar_url}
            ></UserItem>
          );
        })}
      </div>
    );
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
