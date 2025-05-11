import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "/images/Header_Logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Close menu when location changes
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar relative bg-white p-4 flex justify-between items-center w-full shadow-md px-[5vw] font-GSD_Regular z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <button onClick={() => navigate("/")}>
          <img src={Logo} alt="GDG logo" className="h-8 mr-2" />
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        <button
          className="nav-links text-gray-800 relative"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="nav-links text-gray-800 relative"
          onClick={() => navigate("/events")}
        >
          Events
        </button>
        <button
          className="text-gray-800 nav-links relative"
          onClick={() => navigate("/team")}
        >
          Team
        </button>
        {/* <button
          className="text-gray-800 nav-links relative"
          onClick={() => navigate("/articles")}
        >
          Articles
        </button> */}
        <button
          className="text-gray-800 nav-links relative"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-gray-800" />
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-opacity-70 backdrop-blur-lg text-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } z-50`}
        style={{
          background: "rgba(66, 133, 244, 0.55)", // Glassmorphic background
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Close Button Inside the Overlay */}
        <button
          className="absolute top-6 right-8 text-white text-3xl"
          onClick={toggleMenu}
        >
          <AiOutlineClose className="w-8 h-8" />
        </button>

        {/* Menu Links */}
        <button
          className="text-white text-3xl mb-6 transition relative"
          onClick={() => {
            navigate("/");
            toggleMenu();
          }}
        >
          Home
        </button>
        <button
          className="text-white text-3xl mb-6 transition relative"
          onClick={() => {
            navigate("/events");
            toggleMenu();
          }}
        >
          Events
        </button>
        <button
          className="text-white text-3xl mb-6 transition relative"
          onClick={() => {
            navigate("/team");
            toggleMenu();
          }}
        >
          Team
        </button>
        {/* <button
          className="text-white text-3xl mb-6 transition relative"
          onClick={() => {
            navigate("/articles");
            toggleMenu();
          }}
        >
          Articles
        </button> */}
        <button
          className="text-white text-3xl transition relative"
          onClick={() => {
            navigate("/contact");
            toggleMenu();
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
