import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";

import logo from "../assets/profil.jpg";
const HeroSection = () => {
  return (
    <div className="bg-[#100123] w-full h-screen">
      {/* Hero Section */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-1xl text-[#6686B0] font-semibold">
          HELLO~ I AM JOHN AND I DO
        </p>
        <h1
          className="text-5xl font-bold text-[#D5E3EF] sm:text-6xl md:text-7xl lg
        :text-8xl xl:text-6xl 2xl:text-10xl tracking-tight leading-none py-3"
        >
          DESIGN, ILLUSTRATION <span className="">&amp;</span> DEVELOPMENT
        </h1>
        <div className="flex flex-row">
          <img
            src={logo}
            alt="Profil"
            className="w-[100px] rounded-full px-4"
          />
          <p className="mt-4 text-lg font-medium text-[#6686B0] max-w-md pb-4">
            I thoughtfuly design digital Interfaces for the web and mobile
            devices.
          </p>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-2">
          <a href="/">
            <AiOutlineLinkedin className="text-white" size={35} />
          </a>
          <a href="/">
            <AiOutlineFacebook className="text-white" size={35} />
          </a>
          <a href="/">
            <AiOutlineGithub className="text-white" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
