import React from "react";

const Pagination = (props) => {
  const { pageSize, itemsCount, currentPage, onChangePage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  let counter = 1;
  const pages = Array.from({ length: pagesCount }, () => counter++);
  console.log(pagesCount);
  return (
    <ul className="pagination pagination-lg">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "page-item disabled" : "page-item"}
        >
          <button onClick={() => onChangePage(page)} className="page-link">
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
