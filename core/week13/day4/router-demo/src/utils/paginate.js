import _ from "lodash";

const paginate = (items, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;
  const pageItems = _(items).slice(startIndex).take(pageSize).value();

  return [pageItems, pageItems.length];
};

export default paginate;
