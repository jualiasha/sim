import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { IUserBoxProps, IUserInfo } from "./@types";
import UserList from "./components/UserList";
import UserBox from "./components/UserBox";
import "./assets//sass/index.scss";

const App: FC = () => {
  const [users, setUsers] = useState<IUserInfo[] | null>(() => null); //users from API call
  const [userBox, setUserBox] = useState<IUserBoxProps | null>(() => null); // userinfo to show in appearing box

  //getting info on useName click to userBox
  const handleUserChange = (user: IUserInfo) => {
    setUserBox({
      name: user.name,
      phone: user.phone,
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
    });
  };

  useEffect(() => {
    if (!users) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((resp: any) => setUsers(() => resp.data));
    }
  }, [users, setUsers]);

  return (
    <>
      <header></header>
      <main>
        {!users ? (
          <h1>Loading...</h1>
        ) : (
          <div className="users">
            <ul className="users__list">
              {users?.map((user: IUserInfo) => {
                return (
                  <UserList
                    key={user.id}
                    user={user}
                    handleUserChange={() => handleUserChange(user)}
                  />
                );
              })}
            </ul>
            <div>{userBox && <UserBox user={userBox} />}</div>
          </div>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default App;
