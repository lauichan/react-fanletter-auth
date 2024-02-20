import { useSelector } from "react-redux";
import FanLetterForm from "../components/home/FanLetterForm";
import MemberCard from "../components/home/MemberCard";
import FanLetterList from "../components/home/FanLetterList";

function Home() {
  const comments = useSelector((state) => state.fanletter.fanletters);
  const member = useSelector((state) => state.member);

  const commentList = comments.filter((letter) => letter.writedTo === member);

  return (
    <>
      <MemberCard />
      <FanLetterForm member={member} />
      <FanLetterList list={commentList} />
    </>
  );
}

export default Home;
