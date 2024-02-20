import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FanLetterDetail from "../components/detail/FanLetterDetail";

function Detail() {
  const { id } = useParams();
  const comments = useSelector((state) => state.fanletter.fanletters);
  const article = comments.find((letter) => letter.id === id) ?? {};

  return <FanLetterDetail article={article} />;
}

export default Detail;
