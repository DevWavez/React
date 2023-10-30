const Bottombar = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
      {/* Sidebar Desktop */}

      {/* Bottem Bar mobile */}
      <div>
        <ul className="flex flex-row">
          <li className="ml-2">
            <a href="/">
              <i className="icon-home"></i> Home
            </a>
          </li>
          <li className="ml-2">
            <a href="/">
              <i className="icon-search"></i> Explore
            </a>
          </li>
          <li className="ml-2">
            <a href="/">
              <i className="icon-users"></i> People
            </a>
          </li>
          <li className="ml-2">
            <a href="/">
              <i className="icon-heart"></i> Saved
            </a>
          </li>
          <li className="ml-2">
            <a href="/">
              <i className="icon-chart"></i> Ranking
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
