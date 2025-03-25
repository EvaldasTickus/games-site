import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
  const {games, error} = useGames()
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 p-2.5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
