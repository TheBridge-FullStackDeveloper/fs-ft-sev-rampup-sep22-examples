import { ToastContainer } from "react-toastify";
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default PublicLayout;
