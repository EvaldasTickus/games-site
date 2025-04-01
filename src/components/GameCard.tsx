import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-urls";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="max-w-[600px] flex flex-col min-h-[420px]">
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="h-60 w-full object-cover"
      />
      <div className="dark:bg-zinc-800 bg-gray-300 p-5 flex flex-col flex-grow">
        <div className="flex justify-between mt-2">
          <PlatformIconList
            platforms={
              Array.isArray(game.parent_platforms)
                ? game.parent_platforms.map((p) => p.platform)
                : []
            }
          />
          <CriticScore score={game.metacritic} />
        </div>
        <div className="text-2xl mt-auto text-center">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
