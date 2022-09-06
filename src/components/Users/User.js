import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <li className={styles.user}>
      {props.data.name} ({props.data.age} years old)
    </li>
  );
};

export default User;
