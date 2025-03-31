import DarkModeToggle from "./DarkModeToggle";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.avif";

const NavBar = () => {
  return (
    <div className="h-[90px] pb-1 flex justify-between items-center px-3 gap-1.5 border-b-1 border-gray-700 dark:border-gray-300">
      <img className="w-12 md:w-17 md:ml-3 rounded-2xl" src={logo} />
      <SearchInput />
      <DarkModeToggle />
    </div>
  );
};

export default NavBar;
