import { Fragment } from "react";
import NavBar from "../components/NavBar.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  const location = useLocation();

  // Check if the current path is not the home page ("/")
  const shouldShowNavBar = location.pathname !== "/";

  return (
    <Fragment>
      {shouldShowNavBar && <NavBar />}
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
