function Profile({ user, toggleMode }) {
  const handleEdit = () => {
    toggleMode();
  };

  return (
    <section>
      <strong>프로필 관리</strong>
      <img src={1} />
      <p></p>
      <button onClick={handleEdit}>수정하기</button>
    </section>
  );
}

export default Profile;
