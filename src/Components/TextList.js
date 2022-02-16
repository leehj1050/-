import { useState } from "react";
import Pagination from "./Pagination";
import "./TextList.css";

export default function TextList({ setWriteButton, newUserWrite }) {
  return (
    <div className="TextList">
      {/* 헤더부분 */}
      <div className="headerWrap">
        <h1>게시판</h1>
        <p>자유롭게 글을 게시하는 공간입니다.</p>
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
          {newUserWrite.map((writItem, index) => {
            return (
              <div key={index} className="contentsArea">
                <div>{index + 1}</div>
                <div
                  onClick={() => {
                    setWriteButton(true);
                  }}
                >
                  {writItem.title}
                </div>
                <div>{writItem.userName}</div>
              </div>
            );
          })}
        </div>
        <div className="PagiNation">
          <Pagination />
          <a
            href="#"
            onClick={() => {
              setWriteButton(true);
            }}
          >
            글쓰기
          </a>
        </div>
      </div>
    </div>
  );
}
