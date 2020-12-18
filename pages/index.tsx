import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { TableView } from "../components/Table/TableView";
import { Panel } from "../components/UI/Panel";

import { Table } from "../models";

const Home: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket>();
  const [name, setName] = useState<string>("");
  const [targetIP, setTargetIP] = useState<string>("localhost");
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
          socket={socket}
          setSocket={setSocket}
          name={name}
          setName={setName}
          targetIP={targetIP}
          setTargetIP={setTargetIP}
          table={table}
          setTable={setTable}
        />
      </main>
    </div>
  );
};

export default Home;
