import { useState, useRef } from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    console.log(nameInputRef.current.value);
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random(),
    };

    props.onAddUser(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.card}>
        <form onSubmit={submitHandler}>
          <div className={styles["input-group"]}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              autoComplete="off"
              ref={nameInputRef}
            />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
