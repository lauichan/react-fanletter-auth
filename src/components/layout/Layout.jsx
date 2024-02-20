import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/modules/auth";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.clear();
  };

  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">에스파 팬레터 콜렉션</Link>
      </h1>
      {user?.accessToken ? (
        <>
          <Link className={styles.mypage} to="/profile">
            마이페이지
          </Link>
          <button className={styles.logout} onClick={handleLogOut}>
            로그아웃
          </button>
        </>
      ) : null}
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
