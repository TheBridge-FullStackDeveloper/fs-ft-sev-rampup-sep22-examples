const paginate = (items, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;
  const pageItems = items.slice(startIndex, startIndex + pageSize);

  return [pageItems, pageItems.length];
};

export default paginate;
