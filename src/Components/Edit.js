import React from "react";
import { useNavigate } from "react-router-dom";

export default function Edit({
  editTitle,
  editName,
  editText,
  setEditTitle,
  setEditName,
  setEditText,
  userNo,
  newUserWrite,
  setNewUserWrite,
}) {
  /* 수정 기능 */
  const editClickFunc = () => {
    if (!(editTitle && editName && editText)) {
      alert("빠진부분이 없나 다시 확인해주세요");
    } else {
      setNewUserWrite(
        newUserWrite.map((item) =>
          item.no === userNo
            ? { ...item, title: editTitle, userName: editName, text: editText }
            : item
        )
      );
      alert("수정 하시겠습니까?");
      navigate("/");
    }
  };
  let navigate = useNavigate();

  return (
    <div className="TextWrite">
      <div className="form">
        <input
          className="titleArea"
          placeholder="제목을 입력하세요."
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
          autoFocus
        />
        <input
          className="UserArea"
          placeholder="글쓴이를 입력하세요."
          value={editName}
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
        <textarea
          className="contentArea"
          placeholder="내용을 입력하세요."
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
        <div className="buttonArea">
          <button onClick={editClickFunc}>등록</button>
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
