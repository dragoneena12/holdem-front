import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { CardImage } from "../components/CardImage";
import { Form } from "../components/Form";
import { Card } from "../models";

const Home: React.FC = () => {
  const [myCard, setMyCard] = useState<Card>(new Card(1, "S"));

  return (
    <div className={styles.container}>
      <Head>
        <title>Texias Hold&apos;em</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CardImage card={myCard} />
        <Form myCard={myCard} setMyCard={setMyCard} />
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
