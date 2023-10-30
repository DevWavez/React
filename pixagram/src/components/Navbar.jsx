import { useState } from "react";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
      {/* Logo */}
      <div className="w-[200px] relative left-[-30px]">
        <img src={logo} alt="" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="py-6 ml-2">
            <a href="/">Home</a>
          </li>
          <li className="py-6 ml-2">
            <a href="/">Explore</a>
          </li>
          <li className="py-6 ml-2">
            <a href="/">People</a>
          </li>
          <li className="py-6 ml-2">
            <a href="/">Saved</a>
          </li>
          <li className="py-6 ml-2">
            <a href="/">Create Post</a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-[5rem] left-0 w-full h-[260px] bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-2 text-2xl ml-2">
          <a href="/">Home</a>
        </li>
        <li className="py-2 text-2xl ml-2">
          <a href="/">Explore</a>
        </li>
        <li className="py-2 text-2xl ml-2">
          <a href="/">People</a>
        </li>
        <li className="py-2 text-2xl ml-2">
          <a href="/">Saved</a>
        </li>
        <li className="py-2 text-2xl ml-2">
          <a href="/">Create Post</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
