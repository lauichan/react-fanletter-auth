import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __logIn } from "../../store/modules/auth";
import styles from "./Login.module.css";

function LogIn({ handleToggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { id, password } = e.target;
    dispatch(
      __logIn({
        id: id.value,
        password: password.value,
      })
    );
    navigate("/");
    console.log("로그인 성공");
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
        <button>로그인</button>
        <button className={styles.less} type="button" onClick={handleToggle}>
          회원가입
        </button>
      </form>
    </section>
  );
}

export default LogIn;
