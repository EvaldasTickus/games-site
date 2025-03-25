import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <div className="flex items-center">
      <img className="w-[60px]" src={logo} />
      <p>NavBar</p>
    </div>
  )
}

export default NavBar