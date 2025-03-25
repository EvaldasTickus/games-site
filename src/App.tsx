import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg white text-black dark:bg-gray-950 dark:text-white">
      <div>
        <NavBar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/4">
          Aside
        </div>

        <div className="w-full lg:w-3/4 ">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
