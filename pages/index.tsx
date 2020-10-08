import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { CardPair } from "../components/CardPair";
import { GetCards } from "../components/GetCards";
import { Card } from "../models";

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    new Card(1, "S"),
    new Card(2, "S"),
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Texias Hold&apos;em</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CardPair cards={cards} />
        <GetCards cards={cards} setCards={setCards} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
