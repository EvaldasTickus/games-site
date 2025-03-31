import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import Spinner from "../components/Spinner";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isPending, error } = useGameDetails(slug!);

  if (isPending) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div className="grid md:grid-cols-2">
      <div>
        <h1 className="text-5xl mb-5">{game.name}</h1>
        <ExpandableText children={game.description_raw} />
        <GameAttributes game={game} />
      </div>
      <div>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailPage;
