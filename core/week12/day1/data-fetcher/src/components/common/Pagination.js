import React from "react";

const Pagination = (props) => {
  const { pageSize, itemsCount } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  let counter = 1;
  const pages = Array.from({ length: pagesCount }, () => counter++);

  return (
    <>
      {pages.map((page) => (
        <button key={page}>{page}</button>
      ))}
    </>
  );
};

export default Pagination;
