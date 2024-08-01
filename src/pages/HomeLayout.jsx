import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "./";
function HomeLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
