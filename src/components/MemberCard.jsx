import { aespa } from "@static/data";
import { useDispatch, useSelector } from "react-redux";
import { selectMember } from "@store/modules/member";

function MemberCard() {
  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const handleOnClick = (name) => {
    dispatch(selectMember(name));
  };

  return (
    <section>
      {aespa.map(({ id, name }) => {
        return (
          <button
            type="button"
            key={id}
            onClick={() => handleOnClick(name)}
            $backColor={member === name ? "white" : "#f9f9f9"}
          >
            {name}
          </button>
        );
      })}
    </section>
  );
}

export default MemberCard;
