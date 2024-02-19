import styles from "./SignUp.module.css";

function SignUp({ handleToggle }) {
  return (
    <section className={styles.section}>
      <h1>회원 가입</h1>
      <form className={styles.form}>
        <p>
          <label>아이디</label>
          <input type="text"></input>
        </p>
        <p>
          <label>비밀번호</label>
          <input type="password"></input>
        </p>
        <p>
          <label>닉네임</label>
          <input type="text"></input>
        </p>
        <button>회원가입</button>
        <button className={styles.less} type="button" onClick={handleToggle}>
          로그인
        </button>
      </form>
    </section>
  );
}

export default SignUp;
