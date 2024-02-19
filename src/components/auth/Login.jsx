import styles from "./Login.module.css";

function LogIn({ handleToggle }) {
  return (
    <section className={styles.section}>
      <h1>로그인</h1>
      <form className={styles.form}>
        <p>
          <label>아이디</label>
          <input type="text"></input>
        </p>
        <p>
          <label>비밀번호</label>
          <input type="password"></input>
        </p>
        <button>로그인</button>
        <button class={styles.less} type="button" onClick={handleToggle}>
          회원가입
        </button>
      </form>
    </section>
  );
}

export default LogIn;
