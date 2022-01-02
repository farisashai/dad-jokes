import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    const joke = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return joke;
  };

  const updateJoke = async () => {
    const newJoke = await getJoke();
    setJoke(newJoke.joke);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dad Joke Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Dad Joke <span className={styles.blue}>Generator!</span>
        </h1>
        <button className={styles.button} onClick={updateJoke}>
          Tell me a joke
        </button>
        <h1>{joke}</h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/farisashai">Built by @farisashai</a>
      </footer>
    </div>
  );
}
