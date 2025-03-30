import DarkModeToggle from "./DarkModeToggle"
import SearchInput from "./SearchInput"



const NavBar = () => {
  return (
    <div className="h-[80px] flex justify-between items-center px-3 gap-1.5">
      <div className="whitespace-nowrap text-3xl font-semibold underline pl-4 text-zinc-500 dark:text-zinc-300">Game Hub</div>
      <SearchInput />
      <DarkModeToggle />
    </div>
  )
}

export default NavBar