import { deleteFanLetter } from "@store/modules/fanletter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// 0000년 00월 00일 월요일
function timeString(date) {
  return new Date(date).toLocaleDateString("ko-kr", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
