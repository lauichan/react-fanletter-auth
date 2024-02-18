import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { timeString } from "../../utils/date";
import { deleteFanLetter, updateFanLetter } from "../../store/modules/fanletter";
import { useState } from "react";

function FanLetterDetail({ article }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(article.content);

  const handleChange = (e) => {
    setEditContent(e.target.value);
  };

  const changeEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEditBtn = () => {
    changeEditMode();
    if (!editMode) return;
    dispatch(updateFanLetter({ ...article, content: editContent }));
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      dispatch(deleteFanLetter(id));
      navigate("/");
    }
  };

  return (
    <section>
      <article>
        <header>
          <img src={article.avatar} alt={article.nickname} />
          <span>{article.nickname}</span>
          <time>{timeString(article.createdAt)}</time>
        </header>
        {editMode ? (
          <textarea value={editContent} onChange={handleChange} />
        ) : (
          <p>{article.content}</p>
        )}
        <footer>
          <span>To. {article.writedTo}</span>
          <button onClick={handleEditBtn}>수정</button>
          <button onClick={() => handleDeleteBtn(article.id)}>삭제</button>
        </footer>
      </article>
    </section>
  );
}

export default FanLetterDetail;
