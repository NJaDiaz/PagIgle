import NavMenu from "./NavMenu.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container py-1 bg-gray-700 max-w-full fixed px-4 lg:px-10 z-10">
      <div className="flex px-3 justify-between w-full">
        <div className="flex items-center justify-center">
          <a className="flex items-center justify-center" href="vidaenfe.com">
          <img className="w-10 h-10"src="img/3.png" alt="VidaEnFe Logo" />
          <span className="ml-2 flex-shrink-0 text-xl font-bold">Vida en Fe</span>
          </a>
        </div>
        <div className=" flex items-center z-20 justify-end lg:flex lg:justify-center lg:w-auto">
          <NavMenu />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
           <svg xmlns="http://www.w3.org/2000/svg" className="block lg:hidden h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
          </button>
          <div className="w-full flex justify-center"> {/* Contenedor flex para centrar Sidebar */}
            <Sidebar open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
