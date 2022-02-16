import { useState } from "react";
import "./TextWrite.css";

export default function TextWrite({
  setWriteButton,
  setUserWrite,
  userWrite,
  setNewUserWrite,
}) {
  /*제목과 유저이름 글내용 각각 입력받아옴*/
  const userWriteValues = (e) => {
    const { name, value } = e.target;
    /*...userWrtie를하지 않으면 덮어쓰기가됨 concat을쓰면 중복으로 두개씩 출력됨*/
    setUserWrite({ ...userWrite, [name]: value });
  };

  /* value저장소 */
  const userValues = () => {
    setNewUserWrite((newUserWrite) => newUserWrite.concat({ ...userWrite }));
  };

  /*등록버튼*/
  const handleClick = () => {
    if (userWrite === "") {
      alert("빠진부분이 없나 다시 확인해주세요");
    } else {
      userValues();
      setWriteButton(false);
      setUserWrite("");
    }
  };

  console.log(userWrite);

  /*글내용입력받아옴*/
  return (
    <div className="TextWrite">
      <div className="form">
        <input
          className="titleArea"
          placeholder="제목을 입력하세요."
          onChange={userWriteValues}
          name="title"
          autoFocus
        />
        <input
          className="UserArea"
          placeholder="글쓴이를 입력하세요."
          onChange={userWriteValues}
          name="userName"
        />
        <textarea
          className="contentArea"
          placeholder="내용을 입력하세요."
          onChange={userWriteValues}
          name="text"
        />
        <div className="buttonArea">
          <button onClick={handleClick}>등록</button>
          <button
            onClick={() => {
              setWriteButton(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
