import React, { FC } from "react";
import { IUserInfo } from "../@types";

interface IUsers {
  user: IUserInfo;
  handleUserChange: (user: IUserInfo) => void;
}

const UserList: FC<IUsers> = ({ user, handleUserChange }) => {
  return (
    <li
      className="users__list__item"
      key={user.id}
      onClick={() => handleUserChange(user)}
    >
      {user.name}
    </li>
  );
};

export default UserList;
