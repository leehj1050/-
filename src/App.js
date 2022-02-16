import { useEffect, useState } from "react";
import "./App.css";
import ClickUserWrite from "./Components/ClickUserWrite";
import TextList from "./Components/TextList";
import TextWrite from "./Components/TextWrite";

function App() {
  useEffect(() => {
    setUserWrite("");
  }, []);

  /* 글쓰기버튼 눌렀을때 글쓰기 컴포넌트 나타나게 하기위한 state*/
  let [writeButton, setWriteButton] = useState(false);
  /* 제목 글쓴이 내용 저장*/
  let [userWrite, setUserWrite] = useState({});

  /* 받은 제목 글쓴이 내용 새로 어레이에저장*/
  let [newUserWrite, setNewUserWrite] = useState([]);

  return (
    <div className="App">
      {writeButton ? (
        <TextWrite
          setWriteButton={setWriteButton}
          setUserWrite={setUserWrite}
          userWrite={userWrite}
          setNewUserWrite={setNewUserWrite}
          newUserWrite={newUserWrite}
        />
      ) : (
        <TextList setWriteButton={setWriteButton} newUserWrite={newUserWrite} />
      )}
    </div>
  );
}

export default App;
