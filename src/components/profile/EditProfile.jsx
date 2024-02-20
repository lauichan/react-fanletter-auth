function EditProfile({ toggleMode }) {
  const handleEdit = () => {
    toggleMode();
  };

  return (
    <section>
      <div>EditProfile</div>
      <button onClick={handleEdit}>수정완료</button>
    </section>
  );
}

export default EditProfile;
