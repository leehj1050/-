import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Detail from "./Detail";
import "./TextList.css";

export default function TextList({
  resultPage,
  totalPage,
  perPage,
  pageNation,
  setUserTitle,
  setUserText,
  setUserName,
  NumberCheck,
}) {
  return (
    <div className="TextList">
      {/* 헤더부분 */}
      <div className="headerWrap">
        <h1> 게시판</h1>
        <p>
          자유롭게 글을 게시하는 공간입니다. (DB없이 CRUD 구현한 게시판입니다.){" "}
        </p>
      </div>

      {/* 게시글 부분 */}
      <div className="contentWrap">
        {/*게시글 헤더*/}
        <div className="contentHeader">
          <div>번호</div>
          <div>제목</div>
          <div>글쓴이</div>
        </div>
        {/*게시글 내용*/}
        <div className="contentsText">
          {resultPage.map((writItem, index) => {
            return (
              <Detail
                key={index}
                writItem={writItem}
                index={index}
                setUserTitle={setUserTitle}
                setUserText={setUserText}
                setUserName={setUserName}
                NumberCheck={NumberCheck}
              />
            );
          })}
        </div>
        <div className="PagiNation">
          <Pagination
            perPage={perPage}
            totalPage={totalPage}
            pageNation={pageNation}
          />
          <Link to="/write">글쓰기</Link>
        </div>
      </div>
    </div>
  );
}
