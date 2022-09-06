import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import UserForm from "./components/NewUser/UserForm";

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
      <UserForm onAddUser={newUserHandler} />
      <UserList data={userData} />
    </div>
  );
}

export default App;
