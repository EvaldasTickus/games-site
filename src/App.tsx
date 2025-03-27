import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg white text-black dark:bg-gray-950 dark:text-white">
      <div>
        <NavBar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden px-5 lg:block lg:w-[250px]">
          <GenreList />
        </div>

        <div className="w-full">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
