import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Post = ({ title, body }) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="danger">Eliminar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
