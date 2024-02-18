import { useDispatch, useSelector } from "react-redux";
import { aespa } from "../../static/data";
import { selectMember } from "../../store/modules/member";
import styles from "./MemberCard.module.css";

function MemberCard() {
  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const handleOnClick = (name) => {
    dispatch(selectMember(name));
  };

  return (
    <section className={styles.section}>
      {aespa.map(({ id, name }) => {
        return (
          <button
            className={`${styles.button} ${member === name ? styles.selected : ""}`}
            type="button"
            key={id}
            onClick={() => handleOnClick(name)}
          >
            {name}
          </button>
        );
      })}
    </section>
  );
}

export default MemberCard;
