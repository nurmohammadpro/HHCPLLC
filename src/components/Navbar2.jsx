import CloseIcon from "@mui/icons-material/Close";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "About",
      path: "/about",
      icon: <InfoIcon />,
    },
    {
      title: "Services",
      path: "/services",
      icon: <MedicalServicesIcon />,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <HeadphonesIcon />,
    },
  ];
  return (
    <div className="w-full bg-primary top-0 -z-40">
      <div className="flex items-center justify-between text-accent-3 max-w-[1280px] mx-auto px-2 py-4">
        <div>
          <Link to="/">
            <h3 className="font-bold text-2xl lg:text-4xl">HHCPLLC</h3>
          </Link>
        </div>
        <div className="hidden lg:flex">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-2 w-full hover:bg-accent-1 rounded-md px-4 py-2 transition duration-300 ease-in-out"
            >
              <span className="text-accent-3 lg:hidden mr-2">{item.icon}</span>
              <span className="text-accent-3 font-medium text-xl font-secondary">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-accent-3">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-primary fixed top-0 left-0 w-full h-screen z-50">
            <div className="p-4">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-accent-3 cursor-pointer"
              >
                <CloseIcon />
              </button>
              <ul className="flex mt-16 flex-col items-start justify-center gap-8">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-none hover:bg-accent-1 p-2 w-full rounded-md transition duration-300 ease-in-out"
                  >
                    <Link
                      to={item.path}
                      onClick={toggleMenu}
                      className="flex items-center gap-2 "
                    >
                      <span className="text-accent-3">{item.icon}</span>
                      <span className="text-accent-3 font-secondary">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
