import { useNavigate } from "react-router-dom";

export default function Detail({
  setUserTitle,
  setUserText,
  setUserName,
  NumberCheck,
  writItem,
}) {
  let navigate = useNavigate();
  return (
    <div className="contentsArea">
      <div>{writItem.no}</div>
      <div
        onClick={() => {
          setUserTitle(writItem.title);
          setUserText(writItem.text);
          setUserName(writItem.userName);
          navigate("/userView");
          NumberCheck(writItem.no);
        }}
      >
        {writItem.title}
      </div>
      <div>{writItem.userName}</div>
    </div>
  );
}
