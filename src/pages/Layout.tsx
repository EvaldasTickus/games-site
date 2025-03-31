import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <div className="dark:bg-zinc-900 dark:text-white">
        <NavBar />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
