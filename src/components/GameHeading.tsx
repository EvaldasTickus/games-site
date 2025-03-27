import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`

  return (
    <h1 className="text-4xl font-semibold ml-2 dark:text-gray-300">{heading}</h1>
  )
}

export default GameHeading