import { useState } from "react";
import styles from "./Profile.module.css";
import { useDispatch } from "react-redux";
import { __setUser } from "../../store/modules/auth";

function EditProfile({ user, toggleMode }) {
  const dispatch = useDispatch();

  const [profileImg, setProfileImg] = useState("");
  const [previewImg, setPreviewImg] = useState(user.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (previewImg !== user.avatar) {
      formData.append("avatar", profileImg);
    }

    if (e.target.nickname.value !== user.nickname) {
      formData.append("nickname", e.target.nickname.value);
    }

    dispatch(__setUser(formData));
    toggleMode();
  };

  const handleImage = (e) => {
    const uploadFile = e.target.files[0];
    setProfileImg(uploadFile);
    setPreviewImg(URL.createObjectURL(uploadFile));
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
          defaultValue={user.nickname}
          autoFocus
        />
        <p>{user.userId}</p>
        <button>수정완료</button>
      </form>
    </section>
  );
}

export default EditProfile;
