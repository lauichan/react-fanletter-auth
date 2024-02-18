import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { timeString } from "../../utils/date";
import { deleteFanLetter, updateFanLetter } from "../../store/modules/fanletter";
import { useState } from "react";
import styles from "./FanLetterDetail.module.css";

function FanLetterDetail({ article }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(article.content);

  const handleChange = (e) => {
    setEditContent(e.target.value);
  };

  const changeEditMode = (mode) => {
    setEditMode(mode);
  };

  const handleEditBtn = () => {
    changeEditMode(true);
    if (!editMode) return;
    if (article.content === editContent) {
      alert("수정된 내용이 없습니다.");
      return;
    } else {
      dispatch(updateFanLetter({ ...article, content: editContent }));
      changeEditMode(false);
    }
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      dispatch(deleteFanLetter(id));
      navigate("/");
    }
  };

  return (
    <section>
      <article className={styles.article}>
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
