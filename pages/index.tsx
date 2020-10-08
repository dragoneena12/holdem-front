import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Table } from "../components/Table/Table";
import { Panel } from "../components/UI/Panel";

import { Card } from "../models";

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    new Card(0, "B"),
    new Card(0, "B"),
  ]);

  const [socket, setSocket] = useState<WebSocket>();

  return (
    <div className={styles.container}>
      <Head>
        <title>Texias Hold&apos;em</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Table cards={cards} playerNum={9} />
        <Panel setCards={setCards} socket={socket} setSocket={setSocket} />
      </main>
    </div>
  );
};

export default Home;
