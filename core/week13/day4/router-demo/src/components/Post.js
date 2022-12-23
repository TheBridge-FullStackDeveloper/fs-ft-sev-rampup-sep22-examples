import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Post = ({ id, title, body, onDelete }) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link to={`${id}`}>{title}</Link>
          </Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button onClick={onDelete} variant="danger">
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
