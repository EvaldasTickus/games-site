import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isPending, error } = useScreenshots(gameId);

  if (isPending) return null;
  if (error) throw error;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
      {data.results.map((file) => (
        <img className="rounded-3xl" key={file.id} src={file.image} />
      ))}
    </div>
  );
};

export default GameScreenshots;
