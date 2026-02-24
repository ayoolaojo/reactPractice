import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

import("./layout.css");
import("../../index.css");

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
