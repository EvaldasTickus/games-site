import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <div className="min-h-screen bg white text-black dark:bg-gray-950 dark:text-white">
      <div>
        <NavBar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden px-5 mt-4 lg:block lg:w-[250px]">
          <GenreList selectedGenre={GameQuery.genre} onSelectGenre={(genre) => setGameQuery({...GameQuery, genre})}/>
        </div>

        <div className="w-full">
          <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...GameQuery, platform})}/>
          <GameGrid gameQuery={GameQuery}/>
        </div>
      </div>
    </div>
  );
}

export default App;
