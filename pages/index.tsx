import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { TableView } from "../components/Table/TableView";
import { Panel } from "../components/UI/Panel";

import { Card, Table } from "../models";

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    new Card(0, "B"),
    new Card(0, "B"),
  ]);

  const [socket, setSocket] = useState<WebSocket>();
  const [name, setName] = useState<string>("");
  const [table, setTable] = useState(new Table());

  return (
    <div className={styles.container}>
      <Head>
        <title>Texias Hold&apos;em</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TableView table={table} playerNum={6} name={name} socket={socket} />
        <Panel
          setCards={setCards}
          socket={socket}
          setSocket={setSocket}
          name={name}
          setName={setName}
          setTable={setTable}
        />
      </main>
    </div>
  );
};

export default Home;
