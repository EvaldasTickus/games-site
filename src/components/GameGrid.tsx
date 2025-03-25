import useGames from "../hooks/useGames";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 p-2.5">
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer>
              <CardSkeleton key={skeleton}></CardSkeleton>
            </CardContainer>
          ))}
        {games.map((game) => (
          <CardContainer>
            <GameCard key={game.id} game={game} />
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
