"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";
import Header from "./Header";

const Form = () => {
  const ref = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
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
              Pour plus d&lsquo;infos, c&lsquo;est par là :
            </label>
            <input
              className={styles.input}
              ref={ref}
              type="password"
              id="password"
              value={password}
              placeholder="Mot de passe..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.button} type="submit">
              Voir les infos
            </button>
            {passwordIncorrect && (
              <div className={styles.incorrect}>Mot de passe incorrect...</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
