import { ToastContainer } from "react-toastify";
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const PublicLayout = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="mt-3">
        <Outlet />
        <Footer />
        <ToastContainer />
      </Container>
    </>
  );
};

export default PublicLayout;
