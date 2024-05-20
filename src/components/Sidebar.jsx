import { Disclosure, Transition } from "@headlessui/react";

const Sidebar = ({ open = false, setOpen }) => {
  return (
    <>
      <Transition show={open}>
        {}
        <Transition.Child
          className="fixed right-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className={`fixed right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
              className="absolute top-2 right-2"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col space-y-3">
            <li>
    <a
      onClick={() => {
        setOpen(false); 
        document.getElementById("Hero").scrollIntoView({ behavior: "smooth" });
      }}
      className="text-lg font-medium text-white hover:text-cyan-200 p-4"
      href="#Hero"
    >
      Inicio
    </a>
  </li>
  <li>
    <a
      onClick={() => {
        setOpen(false);
        document.getElementById("Somos").scrollIntoView({ behavior: "smooth" });
      }}
      className="text-lg font-medium text-white hover:text-cyan-200 p-4"
      href="#Somos"
    >
      Somos
    </a>
  </li>
  <li>
    <a
      onClick={() => {
        setOpen(false); 
        document.getElementById("Somos").scrollIntoView({ behavior: "smooth" });
      }}
      className="text-lg font-medium text-white hover:text-cyan-200 p-4"
      href="#Horarios"
    >
      Horarios
    </a>
  </li>
  <li>
    <a
      onClick={() => {
        setOpen(false); 
        document.getElementById("Somos").scrollIntoView({ behavior: "smooth" });
      }}
      className="text-lg font-medium text-white hover:text-cyan-200 p-4"
      href="#vivo"
    >
      En vivo
    </a>
  </li>
  <li>
    <a
      onClick={() => {
        setOpen(false); 
        document.getElementById("Somos").scrollIntoView({ behavior: "smooth" });
      }}
      className="text-lg font-medium text-white hover:text-cyan-200 p-4"
      href="#escucha"
    >
      Escucha de nuevo
    </a>
  </li>
  <li>
    <a
      onClick={() => {
        setOpen(false);
        document.getElementById("Somos").scrollIntoView({ behavior: "smooth" });
      }}
      className="text-lg font-medium text-white hover:text-cyan-200 p-4"
      href="#Sabados"
    >
      Actividades
    </a>
  </li>
  <li>
    <a
      onClick={() => {
        setOpen(false); 
        document.getElementById("Somos").scrollIntoView({ behavior: "smooth" });
      }}
      className="text-lg font-medium text-white hover:text-cyan-200 p-4"
      href="#Templos"
    >
      Templos
    </a>
  </li>
            </ul>
          </div>
          {/* ... */}
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ... */}
          <div
            onClick={() => setOpen(false)}
            className={`"w-full h-full fixed bg-black opacity-90 z-10 inset-0`}
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;
