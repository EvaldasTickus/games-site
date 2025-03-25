import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <img src={game.background_image} />
      <div className="bg-gray-900 p-5">
        <div className="flex justify-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
        <div className="text-2xl font-semibold">{game.name}</div>
      </div>
    </div>
  );
};

export default GameCard;
