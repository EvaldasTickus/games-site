import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  return (
    <div className="min-h-screen bg white text-black dark:bg-gray-950 dark:text-white">
      <div>
        <NavBar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden px-5 mt-4 lg:block lg:w-[250px]">
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </div>

        <div className="w-full">
          <GameGrid selectedGenre={selectedGenre}/>
        </div>
      </div>
    </div>
  );
}

export default App;
