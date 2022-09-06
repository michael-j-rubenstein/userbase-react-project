import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles["user-list"]}>
      {props.data.map((data) => {
        return <User data={data} key={data.id}></User>;
      })}
    </div>
  );
};

export default UserList;
