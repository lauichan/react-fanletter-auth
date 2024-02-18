import FanLetterForm from "@components/FanLetterForm";
import FanLetterList from "@components/FanLetterList";
import MemberCard from "@components/MemberCard";
import { useDispatch, useSelector } from "react-redux";
import { addFanLetter } from "@store/modules/fanletter";
import { selectMember } from "@store/modules/member";

function Home() {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.fanletter);
  const member = useSelector((state) => state.member);

  const commentList = comments.filter((letter) => letter.writedTo === member);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, content, sendto } = e.target;

    const formData = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      avatar: "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
      nickname: name.value,
      content: content.value,
      writedTo: sendto.value,
    };

    if (!window.confirm("팬레터 작성 확인")) return;

    dispatch(addFanLetter(formData));
    dispatch(selectMember(formData.writedTo));
    e.target.reset();
  };

  return (
    <>
      <MemberCard />
      <FanLetterForm handleOnSubmit={handleOnSubmit} />
      <FanLetterList list={commentList} />
    </>
  );
}

export default Home;
