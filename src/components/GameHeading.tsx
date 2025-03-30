import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);  

  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === platformId
  );



  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <h1 className="text-4xl font-semibold ml-2 dark:text-gray-300">
      {heading}
    </h1>
  );
};

export default GameHeading;
