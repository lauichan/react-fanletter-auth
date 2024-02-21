import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { timeString } from "../../utils/date";
import { __deleteFanLetter, __updateFanLetter } from "../../store/modules/fanletter";
import { useState } from "react";
import styles from "./FanLetterDetail.module.css";
import { isValidToken } from "../../utils/token";

function FanLetterDetail({ article }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(article.content);

  const user = useSelector((state) => state.auth.user);

  const handleChange = (e) => {
    setEditContent(e.target.value);
  };

  const changeEditMode = (mode) => {
    setEditMode(mode);
  };

  const handleEditBtn = () => {
    if (!isValidToken()) {
      navigate("/auth");
      return;
    }

    changeEditMode(true);
    if (!editMode) return;
    if (article.content === editContent) {
      alert("수정된 내용이 없습니다.");
      return;
    } else {
      dispatch(__updateFanLetter({ ...article, content: editContent }));
      changeEditMode(false);
    }
  };

  const handleDeleteBtn = (id) => {
    if (!isValidToken()) {
      navigate("/auth");
      return;
    }

    if (window.confirm("삭제 확인")) {
      dispatch(__deleteFanLetter(id));
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
          {user.userId === article.userId ? (
            <>
              <button onClick={handleEditBtn}>수정</button>
              <button onClick={() => handleDeleteBtn(article.id)}>삭제</button>
            </>
          ) : null}
        </footer>
      </article>
    </section>
  );
}

export default FanLetterDetail;
