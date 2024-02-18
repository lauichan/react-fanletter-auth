import { aespa } from "../../static/data";

function FanLetterForm({
  data = { nickname: "", content: "", writedTo: "" },
  handleOnSubmit,
  editMode,
  changeEditMode,
}) {
  return (
    <section>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="닉네임"
          defaultValue={data.nickname}
          maxLength={30}
          autoComplete="true"
          autoFocus
          required
        ></input>

        <textarea
          name="content"
          placeholder="내용"
          defaultValue={data.content}
          maxLength={300}
          required
        ></textarea>

        <div>
          To.
          <select name="sendto" title="sendto" required>
            <option defaultValue={data.writedTo}>{data.writedTo}</option>
            {aespa.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          {editMode && (
            <button type="button" onClick={() => changeEditMode(false)}>
              취소
            </button>
          )}
          <button type="submit">팬레터 {editMode ? "수정" : "등록"}</button>
        </div>
      </form>
    </section>
  );
}

export default FanLetterForm;
