import React from "react";
import "./UserList.css";
const UserList = ({ users, filter }) => {
  console.log(filter);
  if (!users) return <p>Loading</p>;
  return (
    <ul className="user-list">
      {users
        .filter((user) => {
          return filter === "all" || user.email.endsWith(filter);
        })
        .map((user) => {
          return <li key={user.name}>{user.name} has completed 0 todos</li>;
        })}
    </ul>
  );
};

export default UserList;
