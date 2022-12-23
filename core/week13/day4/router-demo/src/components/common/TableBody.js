import _ from "lodash";
import TableCell from "./TableCell";

const TableBody = ({ items, columns }) => {
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          {columns.map(({ path, component }) => (
            <TableCell
              key={path}
              value={
                component ? component(_.get(item, path)) : _.get(item, path)
              }
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
