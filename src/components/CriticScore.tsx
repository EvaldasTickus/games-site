interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 75 ? "text-green-500" : score > 60 ? "text-yellow-500" : "";
  return (
    <div
      color={color}
      className={`bg-gray-200 dark:bg-gray-700 flex font-semibold justify-center items-center px-4 rounded-md w-10 h-8 ${color}`}
    >
      {score}
    </div>
  );
};

export default CriticScore;
