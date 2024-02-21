import { useDispatch } from "react-redux";
import { __logIn } from "../../store/modules/auth";
import styles from "./Login.module.css";

function LogIn({ handleToggle, error }) {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const { id, password } = e.target;

    dispatch(
      __logIn({
        id: id.value,
        password: password.value,
      })
    );
  };

  return (
    <section className={styles.section}>
      <h1>로그인</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <p>
          <label>아이디</label>
          <input type="text" name="id" minLength={4} maxLength={10} required></input>
        </p>
        <p>
          <label>비밀번호</label>
          <input type="password" name="password" minLength={4} maxLength={15} required></input>
        </p>
        {error ? <p className={styles.error}>{error}</p> : null}
        <button>로그인</button>
        <button className={styles.less} type="button" onClick={handleToggle}>
          회원가입
        </button>
      </form>
    </section>
  );
}

export default LogIn;
