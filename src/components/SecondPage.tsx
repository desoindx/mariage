import React from "react";
import Header from "./Header";
import DDay from "./DDay";
import styles from "./Page.module.css";

const SecondPage = () => {
  return (
    <>
      <Header small />
      <div className={styles.container}>
        <DDay />
        <div> Les infos du lendemain</div>
      </div>
    </>
  );
};

export default SecondPage;
