import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <div className="rounded-md overflow-hidden" >
      <img src={game.background_image} />
      <div className="bg-gray-900 p-5">
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        <div className="text-2xl font-semibold">
          {game.name}
        </div>
      </div>
    </div>
  )
}

export default GameCard