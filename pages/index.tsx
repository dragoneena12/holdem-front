import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { TableView } from "../components/Table/TableView";
import { Panel } from "../components/UI/Panel";

import { Table } from "../models";

const Home: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket>();
  const [name, setName] = useState<string>("");
  const [table, setTable] = useState(new Table());
  const [mySeatNum, setMySeatNum] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Texias Hold&apos;em</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TableView
          table={table}
          playerNum={6}
          name={name}
          socket={socket}
          mySeatNum={mySeatNum}
          setMySeatNum={setMySeatNum}
        />
        <Panel
          socket={socket}
          setSocket={setSocket}
          name={name}
          setName={setName}
          table={table}
          setTable={setTable}
          mySeatNum={mySeatNum}
        />
      </main>
    </div>
  );
};

export default Home;
