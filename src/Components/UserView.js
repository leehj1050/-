import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserViewWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header,
  .contents {
    margin-top: 4em;
  }
  .header {
    width: 1000px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid lightgray;
    div {
      margin-bottom: 0.5em;
    }
  }
  .contents {
    width: 1000px;
    min-height: 500px;
    padding: 15px 25px;
    border: 1px solid black;
  }
  .btnArea {
    margin-top: 1em;
    padding: 10px 10px;
    button {
      border-radius: 5px;
      margin-left: 2em;
    }
  }
`;

export default function UserView({
  userTitle,
  userText,
  userName,
  userNo,
  newUserWrite,
  setNewUserWrite,
  setEditTitle,
  setEditName,
  setEditText,
}) {
  /* 삭제 기능 */
  const deleteHandle = () => {
    setNewUserWrite(newUserWrite.filter((item) => item.no !== userNo));
    alert("삭제 하시겠습니까? 다시 되돌릴 수 없습니다!");
    navigate("/");
  };

  /* 수정 버튼 */
  const editHandle = () => {
    navigate("/edit");
    setEditTitle(userTitle);
    setEditName(userName);
    setEditText(userText);
  };
  /*네비게이터*/
  let navigate = useNavigate();
  return (
    <UserViewWrap>
      <div className="header">
        <div>제목 : {userTitle}</div>
        <div>작성자 : {userName}</div>
      </div>

      <div className="contents">
        <div>{userText}</div>
      </div>
      <div className="btnArea">
        <button onClick={editHandle}>수정</button>
        <button onClick={deleteHandle}>삭제</button>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          취소
        </button>
      </div>
    </UserViewWrap>
  );
}
