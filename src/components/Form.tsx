"use client";

import React, { FormEvent, useState } from "react";
import styles from "./Form.module.css";
import Header from "./Header";

const Form = () => {
  const [password, setPassword] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordIncorrect(false);
    const request = await fetch(`/api`, {
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
      method: "post",
    });

    if (request.status !== 200) {
      return setPasswordIncorrect(true);
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.info}>
          <div>
            <h1>On se marie !</h1>
            <h2>Le 21 septembre 2024</h2>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="password">
              Pour plus d&lsquo;info, c&lsquo;est par la :
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Mot de passe..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
            {passwordIncorrect && (
              <div className={styles.incorrect}>Bien essayé...</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
