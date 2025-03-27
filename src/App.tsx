import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return (
    <div className="min-h-screen bg white text-black dark:bg-gray-950 dark:text-white">
      <div>
        <NavBar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden px-5 mt-4 lg:block lg:w-[250px]">
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </div>

        <div className="w-full">
          <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </div>
      </div>
    </div>
  );
}

export default App;
