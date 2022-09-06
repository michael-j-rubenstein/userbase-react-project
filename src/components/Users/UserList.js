import User from "./User";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul className={styles["user-list"]}>
        {props.data.map((data) => {
          return <User data={data} key={data.id}></User>;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
