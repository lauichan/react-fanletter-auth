import { useDispatch, useSelector } from "react-redux";
import { aespa } from "../../static/data";
import { selectMember } from "../../store/modules/member";

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
          <button type="button" key={id} onClick={() => handleOnClick(name)}>
            {name}
          </button>
        );
      })}
    </section>
  );
}

export default MemberCard;
