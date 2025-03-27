import { useRef } from "react"

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form className="w-full flex justify-center" onSubmit={(event) => {
      event.preventDefault()
      if (ref.current) onSearch(ref.current.value)
    }}>
      <input ref={ref} type="search" placeholder="Search games..." className="w-10/12 rounded-3xl py-2 px-5 text-xl bg-gray-300 dark:bg-gray-800" />
    </form>
  )
}

export default SearchInput