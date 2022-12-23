import _ from "lodash";
import ListGroupBootstrap from "react-bootstrap/ListGroup";
import List from "./List";

const ListGroup = ({ items, idPath = "id", titlePath, subTitlePath }) => {
  return (
    <ListGroupBootstrap>
      {items.map((item) => (
        <List
          key={_.get(item, idPath)}
          title={_.get(item, titlePath)}
          subTitle={_.get(item, subTitlePath)}
        />
      ))}
    </ListGroupBootstrap>
  );
};

export default ListGroup;
