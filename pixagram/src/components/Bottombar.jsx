const Bottombar = () => {
  return (
    <div className="fixed left-0 top-[5rem] w-[80px] h-screen flex justify-between items-center px-4 bg-black text-gray-300">
      {/* Sidebar Desktop */}

      {/* Bottem Bar mobile */}
      <div>
        <ul className="flex flex-row">
          <li className="ml-2 ">
            <a href="/">Home</a>
          </li>
          <li className="ml-2">
            <a href="/">Explore</a>
          </li>
          <li className="ml-2">
            <a href="/">People</a>
          </li>
          <li className="ml-2">
            <a href="/">Saved</a>
          </li>
          <li className="ml-2">
            <a href="/">Ranking</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
