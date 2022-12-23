const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ path, label }) => (
          <th key={path}>{label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
