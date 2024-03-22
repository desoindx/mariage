import React from "react";
import Header from "./Header";
import DDay from "./DDay";
import styles from "./Page.module.css";

const MainPage = () => {
  return (
    <>
      <Header small />
      <div className={styles.container}>
        <DDay />
      </div>
    </>
  );
};

export default MainPage;
