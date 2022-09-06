import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <p className={styles.user}>
      {props.data.name} ({props.data.age} years old)
    </p>
  );
};

export default User;
