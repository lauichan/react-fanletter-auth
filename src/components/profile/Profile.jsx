import styles from "./Profile.module.css";

function Profile({ user, toggleMode }) {
  const handleEdit = () => {
    toggleMode();
  };

  return (
    <section className={styles.section}>
      <h1>내 프로필</h1>
      <img src={user.avatar ?? "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png"} />
      <p>{user.nickname}</p>
      <p>{user.userId}</p>
      <button onClick={handleEdit}>수정하기</button>
    </section>
  );
}

export default Profile;
