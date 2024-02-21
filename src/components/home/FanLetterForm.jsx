import { useDispatch, useSelector } from "react-redux";
import { aespa } from "../../static/data";
import { __addFanLetter } from "../../store/modules/fanletter";
import { selectMember } from "../../store/modules/member";
import styles from "./FanLetterForm.module.css";
import { isValidToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

function FanLetterForm({ member }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (isValidToken()) {
      navigate("/auth");
      return;
    }

    const { content, sendto } = e.target;

    const formData = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      avatar: user.avatar ?? "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
      nickname: user.nickname,
      content: content.value,
      writedTo: sendto.value,
      userId: user.userId,
    };

    if (!window.confirm("팬레터 작성 확인")) return;

    dispatch(__addFanLetter(formData));
    dispatch(selectMember(formData.writedTo));
    e.target.reset();
  };

  return (
    <section>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <p>{user.nickname}</p>

        <textarea name="content" placeholder="내용" maxLength={300} required></textarea>

        <div className={styles.bottom}>
          To.
          <select name="sendto" title="sendto" required>
            <option>{member}</option>
            {aespa.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          <button type="submit" disabled={isLoading}>
            팬레터 등록
          </button>
        </div>
      </form>
    </section>
  );
}

export default FanLetterForm;
