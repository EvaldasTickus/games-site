import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-urls";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="max-w-[600px]">
      <img src={getCroppedImageUrl(game.background_image)} />
      <div className="dark:bg-zinc-800 bg-gray-300 p-5">
        <div className="flex justify-between">
          <PlatformIconList
            platforms={Array.isArray(game.parent_platforms) ? game.parent_platforms.map((p) => p.platform) : []}
            
          />
          <CriticScore score={game.metacritic} />
        </div>
        <div className="text-2xl font-semibold">{game.name}</div>
      </div>
    </div>
  );
};

export default GameCard;
