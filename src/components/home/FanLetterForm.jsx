import { useDispatch } from "react-redux";
import { aespa } from "../../static/data";
import { __addFanLetter } from "../../store/modules/fanletter";
import { selectMember } from "../../store/modules/member";
import styles from "./FanLetterForm.module.css";

function FanLetterForm({ member }) {
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, content, sendto } = e.target;

    const formData = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      avatar: "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
      nickname: name.value,
      content: content.value,
      writedTo: sendto.value,
    };

    if (!window.confirm("팬레터 작성 확인")) return;

    dispatch(__addFanLetter(formData));
    dispatch(selectMember(formData.writedTo));
    e.target.reset();
  };

  return (
    <section>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="닉네임"
          maxLength={30}
          autoComplete="true"
          autoFocus
          required
        ></input>

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
          <button type="submit">팬레터 등록</button>
        </div>
      </form>
    </section>
  );
}

export default FanLetterForm;
