import { useParams } from "react-router-dom"
import useGameDetails from "../hooks/useGameDetails";
import Spinner from "../components/Spinner";

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isPending, error} = useGameDetails(slug!);

  if (isPending) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description_raw}</p>
    </div>
  )
}

export default GameDetailPage