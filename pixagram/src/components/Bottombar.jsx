const Bottombar = () => {
  return (
    <div className="fixed bottom-0 w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
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
  );
};

export default Bottombar;
