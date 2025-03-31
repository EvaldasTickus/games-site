import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import Spinner from "../components/Spinner";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isPending, error } = useGameDetails(slug!);

  if (isPending) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div>
      <h1 className="text-5xl mb-5">{game.name}</h1>
      <ExpandableText children={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id}/>
    </div>
  );
};

export default GameDetailPage;
