import React, { useState, useEffect } from "react";
import { Link ,NavLink} from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Ensure you have `framer-motion` installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const container = {
    width: 65,
    height: 15,
    backgroundColor: "rgb(229 195 255)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: "16px 10px",
    alignItems: "center",
  };

  const handle = {
    width: 25,
    height: 25,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
  };

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

 
  return (
    <AnimatePresence>
      {isNavbarVisible && (
        <motion.nav
          className="text-white w-full shadow-md fixed top-0 z-10"
          style={{ backgroundColor: "#10ffaf" }} // Solid background color
          initial={{ y: -100 }} // Start off-screen
          animate={{ y: 0 }} // Slide into view
          exit={{ y: -100 }} // Slide out of view
          transition={{ type: "spring", stiffness: 100, damping: 20 }} 
        >
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo */}
          <Link to={"/"}>            <h1 className="text-2xl font-bold cursor-pointer"><span className="text-[#6463939c]">&#123;</span><span className="text-[#381f66]">SP</span><span className="text-[#6463939c]">&#125;</span></h1>
          </Link>            

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              {[
                { tab: "Home", src: "https://cdn.lordicon.com/jeuxydnh.json" },
                { tab: "About", src: "https://cdn.lordicon.com/srupsmbe.json" },
                { tab: "Projects", src: "https://cdn.lordicon.com/yvjimpju.json" },
                { tab: "Contact", src: "https://cdn.lordicon.com/pmivedvy.json" },
              ].map((item) => (
                <li key={item.tab} className="flex items-center justify-center">
                  <NavLink
                    to={item.tab === "Home" ? "/" : `/${item.tab.toLowerCase()}`}
                    className={({isActive})=> `${isActive ? 'text-gray-400' :'text-white'} cursor-pointer hover:text-gray-400 transition flex items-center justify-center gap-2`}
                  >
                    {item.tab}
                    <lord-icon
                      className="w-6 h-6"
                      src={item.src}
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#101828,secondary:#101828"
                    ></lord-icon>
                  </NavLink>
                </li>
              ))}
            </ul>

           

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul
              className="md:hidden space-y-4 py-4 px-6 text-center"
              style={{ backgroundColor: "#10ffaf" }} // Solid background color
            >
              {[
                { tab: "Home", src: "https://cdn.lordicon.com/jeuxydnh.json" },
                { tab: "About", src: "https://cdn.lordicon.com/srupsmbe.json" },
                { tab: "Projects", src: "https://cdn.lordicon.com/yvjimpju.json" },
                { tab: "Contact", src: "https://cdn.lordicon.com/pmivedvy.json" },
              ].map((item) => (
                <li key={item.tab}>
                  <NavLink
                    to={item.tab === "Home" ? "/" : `/${item.tab.toLowerCase()}`}
                    className={({isActive})=>`${isActive ? 'text-gray-400':'text-white'} block cursor-pointer hover:text-gray-400 transition`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.tab}
                    <lord-icon
                      className="w-6 h-6"
                      src={item.src}
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#101828,secondary:#101828"
                    ></lord-icon>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;