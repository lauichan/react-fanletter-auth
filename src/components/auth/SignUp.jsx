import { useDispatch } from "react-redux";
import styles from "./SignUp.module.css";
import { __register } from "../../store/modules/auth";
import { useEffect } from "react";

function SignUp({ handleToggle, error, isError }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (error !== null && !isError) {
      alert("가입한 아이디로 로그인 해주세요");
      handleToggle();
    }
  }, [isError]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { id, password, nickname } = e.target;
    dispatch(
      __register({
        id: id.value,
        password: password.value,
        nickname: nickname.value,
      })
    );
  };

  return (
    <section className={styles.section}>
      <h1>회원 가입</h1>
      <form className={styles.form} onSubmit={handleSignUp}>
        <p>
          <label>아이디</label>
          <input type="text" name="id" minLength={4} maxLength={10}></input>
        </p>
        <p>
          <label>비밀번호</label>
          <input type="password" name="password" minLength={4} maxLength={15}></input>
        </p>
        <p>
          <label>닉네임</label>
          <input type="text" name="nickname" minLength={1} maxLength={10}></input>
        </p>
        {error ? <p className={styles.error}>{error}</p> : null}
        <button>회원가입</button>
        <button className={styles.less} type="button" onClick={handleToggle}>
          로그인
        </button>
      </form>
    </section>
  );
}

export default SignUp;
