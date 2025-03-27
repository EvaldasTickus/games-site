import logo from "../assets/logo.webp"
import DarkModeToggle from "./DarkModeToggle"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <div className="h-[80px] flex justify-between items-center px-3 gap-1.5">
      <img className="w-[60px]" src={logo} />
      <SearchInput onSearch={onSearch} />
      <DarkModeToggle />
    </div>
  )
}

export default NavBar