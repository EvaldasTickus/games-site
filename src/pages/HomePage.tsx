import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden px-5 mt-4 lg:block lg:w-[250px]">
          <GenreList  />
        </div>

        <div className="w-full">
          <GameHeading />
          <div className="flex flex-col gap-5 ml-3 mb-5 mt-5">
            <PlatformSelector />
            <SortSelector />
          </div>
          <GameGrid />
        </div>
      </div>
    </div>
  )
}

export default HomePage