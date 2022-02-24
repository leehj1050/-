import { useState } from "react";
import "./App.css";
import TextList from "./Components/TextList";
import TextWrite from "./Components/TextWrite";
import UserView from "./Components/UserView";
import Data from "./Data";
import Edit from "./Components/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  /* 제목 */
  let [userTitle, setUserTitle] = useState("");
  /*내용 */
  let [userText, setUserText] = useState("");
  /*이름*/
  let [userName, setUserName] = useState("");
  /* no 받는곳 */
  let [userNo, setUserNo] = useState(0);

  /*수정*/
  let [editTitle, setEditTitle] = useState("");
  let [editName, setEditName] = useState("");
  let [editText, setEditText] = useState("");

  /* 받은 제목 글쓴이 내용 새로 어레이에저장*/
  let [newUserWrite, setNewUserWrite] = useState(Data);

  /* 페이지네이션 */
  let [perPage, setPerPage] = useState(10);
  let [totalPage, setTotalPage] = useState(newUserWrite.length);
  let [currentPage, setCurrentPage] = useState(1);

  let lastOfIndex = currentPage * perPage;
  let firstOfIndex = lastOfIndex - perPage;

  const resultPage = newUserWrite.slice(firstOfIndex, lastOfIndex);

  const pageNation = (page) => {
    alert(page + "로 현재 페이지 변경!");
    setCurrentPage(page);
  };

  /*같은 넘버 검사*/
  const NumberCheck = (no) => {
    setUserNo(no);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <TextList
              resultPage={resultPage}
              perPage={perPage}
              totalPage={totalPage}
              pageNation={pageNation}
              setUserTitle={setUserTitle}
              setUserText={setUserText}
              setUserName={setUserName}
              NumberCheck={NumberCheck}
            />
          }
        />
        <Route
          path="/write"
          element={
            <TextWrite
              userTitle={userTitle}
              userText={userText}
              userName={userName}
              setUserTitle={setUserTitle}
              setUserText={setUserText}
              setUserName={setUserName}
              newUserWrite={newUserWrite}
              setNewUserWrite={setNewUserWrite}
            />
          }
        />
        <Route
          path="/userView/"
          element={
            <UserView
              userTitle={userTitle}
              userText={userText}
              userName={userName}
              userNo={userNo}
              newUserWrite={newUserWrite}
              setNewUserWrite={setNewUserWrite}
              setEditTitle={setEditTitle}
              setEditName={setEditName}
              setEditText={setEditText}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Edit
              editTitle={editTitle}
              editName={editName}
              editText={editText}
              setEditTitle={setEditTitle}
              setEditName={setEditName}
              setEditText={setEditText}
              userNo={userNo}
              newUserWrite={newUserWrite}
              setNewUserWrite={setNewUserWrite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
