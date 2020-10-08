import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import {Card} from '../components/Card';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Texias Hold&apos;em</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card name="KD" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
