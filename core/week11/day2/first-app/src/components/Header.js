import { Navbar, Badge } from "react-bootstrap";

const Header = ({ totalProducts }) => {
  return (
    <Navbar bg="light">
      <Navbar.Brand>
        Super tienda <Badge bg="secondary">{totalProducts}</Badge>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
