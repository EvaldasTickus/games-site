import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="min-h-screen bg white text-black dark:bg-zinc-900 dark:text-white">
      <div>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden px-5 mt-4 lg:block lg:w-[250px]">
          <GenreList
            selectedGenreId={GameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...GameQuery, genreId: genre.id })
            }
          />
        </div>

        <div className="w-full">
          <GameHeading gameQuery={GameQuery} />
          <div className="flex flex-col gap-5 ml-3 mb-5 mt-5">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
            />
          </div>
          <GameGrid gameQuery={GameQuery} />
        </div>
      </div>
    </div>
  );
}

export default App;
