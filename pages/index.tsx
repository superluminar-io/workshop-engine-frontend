import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SignedIn } from "@clerk/nextjs";

const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Workshops</h1>
    <p className={styles.description}>Sign up for an account to get started</p>

    <div className={styles.cards}>
      <div className={styles.card}>
        <SignedIn>
          <a className={styles.cardContent} href="/api/console" target="_blank">
            <img src="/icons/layout.svg" />
            <div>
              <h3>Open AWS Management Console</h3>
              <p>
                Interact with the user button, user profile, and more to preview what
                your users will see
              </p>
            </div>
            <div className={styles.arrow}>
              <img src="/icons/arrow-right.svg" />
            </div>
          </a>
        </SignedIn>
      </div>
    </div>
  </main>
);

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>superluminar workshops</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
    <Main />
  </div>
);

export default Home;
