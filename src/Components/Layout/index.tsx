import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

import("./layout.css");
import("../../index.css");


type LayoutProps = {
  
  showNavbar?: boolean,
  showFooter?: boolean,

};

const Layout = ({showFooter = true, showNavbar = true}:LayoutProps) => {
  return (
    <div className="layout">
      <header>
         {showNavbar && <NavBar />}
      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>
        {  showFooter &&<Footer/>  }
      </footer>
    </div>
  );
};

export default Layout;
