import React from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

function Users({ users, loading }) {
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div style={userStyle}>
        {users.map((user) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
