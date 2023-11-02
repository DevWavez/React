import { useState } from "react";

{
  /* React icons Import */
}
import { FaTimes, FaBars } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { BsPeople, BsPencil } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineRead, AiOutlineContacts } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed flex w-full h-[80px] bg-[#1f1c40] justify-between px-4 items-center text-gray-300">
      <div className="w-[200px]">
        <p className="font-semibold text-[25px]">JohnDoe</p>
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="px-6 flex justify-center items-center border-pink-500 hover:border-b-2">
            <AiOutlineContacts className="inline mr-2" size={20} />
            Contact
          </li>
          <li className="px-6 flex justify-between items-center border-pink-500 hover:border-b-2">
            <BsPeople className="inline mr-2" size={20} />
            About
          </li>
          <li className="px-6 flex justify-center items-center border-pink-500 hover:border-b-2">
            <BsPencil className="inline mr-2" size={20} />
            Drawing
          </li>
          <li className="px-6 flex justify-center items-center border-pink-500 hover:border-b-2">
            <TfiWrite className="inline mr-2" size={20} />
            Writing
          </li>
          <li className="px-6 flex justify-center items-center border-pink-500 hover:border-b-2">
            <AiOutlineRead className="inline mr-2" size={20} /> Reading
          </li>
          <li className="px-6 flex justify-center items-center border-pink-500 hover:border-b-2">
            <BiTimeFive className="inline mr-2" size={20} />
            Now
          </li>
          <li className="px-6 flex justify-center items-center border-pink-500 hover:border-b-2">
            <LiaToolsSolid className="inline mr-2" size={20} />
            Tools
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#1f1c40] flex flex-col justify-center items-center"
          }
        >
          <li>Contact</li>
          <li>About</li>
          <li>Drawind</li>
          <li>Writing</li>
          <li> Reading</li>
          <li>Now</li>
          <li>Tools</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
