import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <li>
      {user.name} <em>({user.username})</em>
    </li>
  );
};
export default User;
