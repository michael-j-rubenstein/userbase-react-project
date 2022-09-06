import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import NewUser from "./components/NewUser/NewUser";

const dummyUserData = [
  { name: "Michael", age: 20, id: "123" },
  { name: "Lilian", age: 21, id: "456" },
];

function App() {
  const [userData, setUserData] = useState(dummyUserData);
  const newUserHandler = (newUserData) => {
    console.log(newUserData);
    setUserData((prevUserData) => {
      return [newUserData, ...prevUserData];
    });
    console.log(userData);
  };
  return (
    <div>
      <NewUser onAddUser={newUserHandler} />
      <UserList data={userData} />
    </div>
  );
}

export default App;
