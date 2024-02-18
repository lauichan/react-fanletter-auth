import { useNavigate } from "react-router-dom";

function FanLetterList({ list }) {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <section>
      {list.length === 0 ? (
        <p>팬 레터가 없습니다.</p>
      ) : (
        <ul>
          {list.map(({ id, avatar, nickname, content }) => {
            return (
              <li key={id} onClick={() => handleOnClick(id)}>
                <img src={avatar} alt={nickname}></img>
                <div>
                  <strong>{nickname}</strong>
                  <p>{content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default FanLetterList;
