import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { timeString } from "../../utils/date";
import { deleteFanLetter } from "../../store/modules/fanletter";

function FanLetterDetail({ article, changeEditMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <p>{article.content}</p>
        <footer>
          <span>To. {article.writedTo}</span>
          <button onClick={() => changeEditMode(true)}>수정</button>
          <button onClick={() => handleDeleteBtn(article.id)}>삭제</button>
        </footer>
      </article>
    </section>
  );
}

export default FanLetterDetail;
