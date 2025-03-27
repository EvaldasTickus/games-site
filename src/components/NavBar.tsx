import logo from "../assets/logo.webp"
import DarkModeToggle from "./DarkModeToggle"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-3">
      <img className="w-[60px]" src={logo} />
      <p>NavBar</p>
      <DarkModeToggle />
    </div>
  )
}

export default NavBar