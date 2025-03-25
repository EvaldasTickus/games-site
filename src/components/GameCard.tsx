import { Game } from "../hooks/useGames"

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <div className="rounded-md overflow-hidden" >
      <img src={game.background_image} />
      <div>
        <div className="text-2xl font-semibold">
          {game.name}
        </div>
      </div>
    </div>
  )
}

export default GameCard