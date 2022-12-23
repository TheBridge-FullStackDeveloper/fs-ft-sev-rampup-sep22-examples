import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ items, columns }) => {
  return (
    <table>
      <TableHead columns={columns} />
      <TableBody items={items} columns={columns} />
    </table>
  );
};

export default Table;
