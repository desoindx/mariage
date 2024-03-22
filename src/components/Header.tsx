import React from "react";
import styles from "./Header.module.css";

const Header = ({ small }: { small?: boolean }) => {
  return (
    <div className={styles.container}>
      <img
        src="/header.jpg"
        alt=""
        className={small ? styles.smallImage : styles.image}
      />
    </div>
  );
};

export default Header;
