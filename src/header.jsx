import { useState } from "react";
import logo from "./assets/logo.webp";
import {
  HiHome,
  HiUser,
  HiCode,
  HiFolder,
  HiAcademicCap,
  HiMail,
  HiMenu,
  HiX,
} from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      href: "#home",
      icon: <HiHome />,
    },
    {
      id: 2,
      name: "About Me",
      href: "#about",
      icon: <HiUser />,
    },
    {
      id: 3,
      name: "Skills",
      href: "#skills",
      icon: <HiCode />,
    },
    {
      id: 4,
      name: "Projects",
      href: "#projects",
      icon: <HiFolder />,
    },
    {
      id: 5,
      name: "Education",
      href: "#education",
      icon: <HiAcademicCap />,
    },
    {
      id: 6,
      name: "Contact Me",
      href: "#contact",
      icon: <HiMail />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md z-50 ">
      <nav className="md:max-w-[90%]  flex justify-between items-center  mx-auto ">
        {/* Logo */}
      <div className="w-[70px] h-[70px] ">
        <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
      </div>


        {/* for large screens  */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="flex  lg:flex-row md:flex-col   items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <span className="text-lg ">{link.icon}</span>

                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* for mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#111827] border-t border-slate-700">
          <ul className="flex flex-col ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-1.5 text-white hover:bg-slate-800 hover:text-cyan-400 transition-all"
                >
                    
                  <span className="text-xl">{link.icon}</span>
                   
                  <span>{link.name}</span>

                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
