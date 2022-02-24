import "./TextWrite.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

let nextId = 16;
export default function TextWrite({
  setUserTitle,
  setUserText,
  setUserName,
  userTitle,
  userText,
  userName,
  newUserWrite,
  setNewUserWrite,
}) {
  useEffect(() => {
    setUserTitle("");
    setUserText("");
    setUserName("");
  }, []);
  let navigate = useNavigate();
  /*제목과 유저이름 글내용 각각 입력받아옴*/
  const userCreateTitle = (e) => {
    setUserTitle(e.target.value);
  };
  const userCreateName = (e) => {
    setUserName(e.target.value);
  };

  const userCreateText = (e) => {
    setUserText(e.target.value);
  };

  /* value저장소 */
  const userValues = () => {
    setNewUserWrite([
      ...newUserWrite,
      { no: nextId, title: userTitle, text: userText, userName: userName },
    ]);
  };

  /*등록버튼*/
  const handleClick = () => {
    if (!(userTitle && userText && userName)) {
      alert("빠진부분이 없나 다시 확인해주세요");
    } else {
      alert("등록 하시겠습니까?");
      userValues();
      navigate("/");
      setUserTitle("");
      setUserText("");
      setUserName("");
      nextId++;
    }
  };

  /*글내용입력받아옴*/
  return (
    <div className="TextWrite">
      <div className="form">
        <input
          className="titleArea"
          placeholder="제목을 입력하세요."
          onChange={userCreateTitle}
          name="title"
          value={userTitle}
          autoFocus
        />
        <input
          className="UserArea"
          placeholder="글쓴이를 입력하세요."
          onChange={userCreateName}
          name="userName"
          value={userName}
        />
        <textarea
          className="contentArea"
          placeholder="내용을 입력하세요."
          onChange={userCreateText}
          name="text"
          value={userText}
        />
        <div className="buttonArea">
          <button onClick={handleClick}>등록</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
