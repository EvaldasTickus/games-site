import React from "react";
import useGames from "../hooks/useGames";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return <p className="text-red-600">{error.message}</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <CardSkeleton></CardSkeleton>
            </CardContainer>
          ))}
        {data?.pages.map((page, id) => (
          <React.Fragment key={id}>
            {page.results.map((game) => (
              <CardContainer key={game.id}>
                <GameCard game={game} />
              </CardContainer>
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <button
          className="my-5 cursor-pointer ml-3 border-1 py-2 px-5 rounded-lg font-semibold"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

export default GameGrid;
