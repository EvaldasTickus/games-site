import { GameQuery } from "../App"
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const {data: genres} = useGenres()
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)

  const {data: platforms} = usePlatforms()
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId)

  

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

  return (
    <h1 className="text-4xl font-semibold ml-2 dark:text-gray-300">{heading}</h1>
  )
}

export default GameHeading