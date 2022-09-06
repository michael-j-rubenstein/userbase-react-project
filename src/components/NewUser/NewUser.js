import styles from "./NewUser.module.css";
import UserForm from "./UserForm";

const NewUser = (props) => {
  const saveUserDataHandler = (userData) => {
    props.onAddUser(userData);
  };

  return (
    <div className={styles["user-form"]}>
      <UserForm onNewUser={saveUserDataHandler} />
    </div>
  );
};

export default NewUser;
