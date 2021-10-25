import React, { FC } from "react";
import { IUserBoxProps } from "../@types";

interface IUserBox {
  user: IUserBoxProps;
}

const UserBox: FC<IUserBox> = ({ user }) => {
  return (
    <div className="users__info">
      <h4 className="users__info__name">{user.name}</h4>
      <p className="users__info__phone">{user.phone}</p>
      <ul className="users__info__address">
        <li>street: {user.street}</li>
        <li>suite: {user.suite}</li>
        <li>city: {user.city}</li>
      </ul>
    </div>
  );
};

export default UserBox;
