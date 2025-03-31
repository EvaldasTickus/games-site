import { useRef } from "react"
import useGameQueryStore from "../store"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const navigate = useNavigate();

  return (
    <form className="w-full flex justify-center" onSubmit={(event) => {
      event.preventDefault()
      if (ref.current) {
        setSearchText(ref.current.value);
        navigate("/");
      }
    }}>
      <input ref={ref} type="search" placeholder="Search games..." className="w-10/12 rounded-3xl py-2 px-5 text-xl bg-gray-300 dark:bg-zinc-800" />
    </form>
  )
}

export default SearchInput