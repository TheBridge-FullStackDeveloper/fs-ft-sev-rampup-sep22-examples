import ListGroupBootstrap from "react-bootstrap/ListGroup";

const List = ({ title, subTitle = null }) => {
  return (
    <ListGroupBootstrap.Item
      action
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {subTitle}
      </div>
    </ListGroupBootstrap.Item>
  );
};

export default List;
