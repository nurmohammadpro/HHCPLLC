import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "About", path: "/about", icon: <InfoIcon /> },
  { name: "Services", path: "/services", icon: <LocalHospitalIcon /> },
  { name: "Team", path: "/team", icon: <Diversity3Icon /> },
  { name: "Contact", path: "/contact", icon: <CallIcon /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="absolute left-0 right-0 flex items-center justify-between font-normal font-secondary py-4 px-2 w-full max-w-[1280px] mx-auto text-primary z-50">
        <div className="hidden lg:flex flex-1 items-center justify-start gap-4">
          {navItems.map((item, index) => (
            <li key={index} className="list-none flex flex-col lg:flex-row">
              <Link to={item.path} className="flex items-center">
                <span className="block lg:hidden p-1">{item.icon}</span>
                <span className="text-primary">{item.name}</span>
              </Link>
            </li>
          ))}
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`fixed top-0 left-0 w-60 h-full z-50 transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <div className="p-4">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-primary cursor-pointer"
              >
                <CloseIcon />
              </button>
              <ul className="flex mt-16 flex-col items-start justify-center gap-8">
                {navItems.map((item, index) => (
                  <li key={index} className="list-none">
                    <Link
                      to={item.path}
                      onClick={toggleMenu}
                      className="flex items-center gap-2"
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="cursor-pointer"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div>
          <h2 className="font-primary text-primary text-xl md:2xl lg:tex-3xl px-8">
            Heaven Harmony Counselling P.L.L.C
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer">
            <CollectionsBookmarkIcon />
          </div>
          <span className="p-1 w-8 h-8 rounded-full text-center bg-orange-400 text-secondary cursor-pointer">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
