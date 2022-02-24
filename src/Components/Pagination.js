import "./Pagination.css";

export default function Pagination({ perPage, totalPage, pageNation }) {
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagiNations">
      {pageNumber.map((page, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              pageNation(page);
            }}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}
