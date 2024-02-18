import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">에스파 팬레터 콜렉션</Link>
      </h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/lauichan/react-fan-letter" target="_blank" rel="noreferrer">
        깃허브
      </a>
    </footer>
  );
};

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
