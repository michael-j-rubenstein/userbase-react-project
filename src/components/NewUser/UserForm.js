import { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName === "" || userAge === "") {
      console.log("Please enter a valid name and age (non-empty values)");
    } else if (userAge < 1) {
      console.log("Please enter a valid age (>0)");
    } else {
      const userData = {
        name: userName,
        age: userAge,
        id: Math.random(),
      };

      props.onNewUser(userData);
    }

    setUserName("");
    setUserAge("");
  };

  return (
    <form className={styles.inputs} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={nameChangeHandler}
        ></input>
      </div>
      <div className={styles["input-group"]}>
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={ageChangeHandler}
        ></input>
      </div>
      <button className={styles.button} type="submit">
        Add User
      </button>
    </form>
  );
};

export default UserForm;
