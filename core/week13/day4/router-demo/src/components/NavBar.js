import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Inicio
          </NavLink>
          <NavLink className="nav-link" to="posts">
            Posts
          </NavLink>
          <NavLink className="nav-link" to="/todos">
            Todos
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contacta
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
