import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __logIn } from "../../store/modules/auth";
import styles from "./Login.module.css";

function LogIn({ handleToggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading } = useSelector((state) => state.auth);

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

  if (user) {
    localStorage.setItem("accessToken", user.accessToken);
    localStorage.setItem("userId", user.userId);
    localStorage.setItem("avatar", user.avatar);
    localStorage.setItem("nickname", user.nickname);
    navigate("/");
  }

  return (
    <section className={styles.section}>
      <h1>로그인</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <p>
          <label>아이디</label>
          <input
            type="text"
            name="id"
            minLength={4}
            maxLength={10}
            required
            disabled={isLoading}
          ></input>
        </p>
        <p>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            minLength={4}
            maxLength={15}
            required
            disabled={isLoading}
          ></input>
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
