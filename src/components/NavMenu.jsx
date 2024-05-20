 import { Menu, Transition } from "@headlessui/react";
 const NavMenu = () => {   return (
    <nav className="hidden lg:flex flex-col lg:flex-row gap-x-4 lg:gap-x-8">
            <a href="#" class="text-lg font-medium text-white hover:text-cyan-400  transition-all duration-500 ">Inicio</a>
            <a href="#Somos" class="text-lg font-medium text-white hover:text-cyan-400  transition-all duration-500">Somos</a>
            <a href="#Horarios" class="text-lg font-medium text-white hover:text-cyan-400  transition-all duration-500">Horarios</a>
            <a href="#vivo" class="text-lg font-medium text-white hover:text-cyan-400  transition-all duration-500">En vivo</a>
            <a href="#escucha" class="text-lg font-medium text-white hover:text-cyan-400  transition-all duration-500">Escucha de nuevo</a>
         <a href="#Sabados" class="text-lg font-medium text-white hover:text-cyan-400  transition-all duration-500">Actividades</a>
            <a href="#Templos" class="text-lg font-medium text-white hover:text-cyan-400  transition-all duration-500">Templos</a>  
                   </nav>
  );
};
 export default NavMenu;


