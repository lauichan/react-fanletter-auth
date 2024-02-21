import { useState } from "react";
import styles from "./Profile.module.css";
import { useDispatch } from "react-redux";
import { __setUser } from "../../store/modules/auth";
import { __updateFanLetter } from "../../store/modules/fanletter";
import authAPI from "../../apis/auth";
import fanLetterAPI from "../../apis/fanletter";

function EditProfile({ user, toggleMode }) {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState(user.nickname);
  const [profileImg, setProfileImg] = useState("");
  const [previewImg, setPreviewImg] = useState(user.avatar);

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleImage = (e) => {
    const uploadFile = e.target.files[0];
    setProfileImg(uploadFile);
    setPreviewImg(URL.createObjectURL(uploadFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (previewImg !== user.avatar) {
      formData.append("avatar", profileImg);
    }

    if (e.target.nickname.value !== user.nickname) {
      formData.append("nickname", nickname);
    }

    dispatch(__setUser(formData));

    // 업데이트한 프로필 내가 작성했던 글에도 적용하기 (포기)
    // const { data: userData } = await authAPI.get(`/user`);
    // const { data } = await fanLetterAPI.get(`/fanletter?userId=${user.userId}`);

    // const myFanletters = data.map((fanletter) => {
    //   return { ...fanletter, nickname: response.nickname, avatar: response.avatar };
    // });

    // myFanletters.forEach((fanletter) => dispatch(__updateFanLetter(fanletter)));

    toggleMode();
  };

  return (
    <section className={styles.section}>
      <h1>프로필 수정</h1>
      <img src={previewImg ?? "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png"} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.upload} htmlFor="upload">
          이미지 업로드
        </label>
        <input type="file" id="upload" name="profile" accept="image/*" onChange={handleImage} />
        <input
          className={styles.nickname}
          type="text"
          name="nickname"
          minLength={1}
          maxLength={10}
          value={nickname}
          onChange={handleNickname}
          autoFocus
        />
        <p>{user.userId}</p>
        <button>수정완료</button>
      </form>
    </section>
  );
}

export default EditProfile;
