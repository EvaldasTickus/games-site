const CardSkeleton = () => {
  return (
    <div className="h-[365px] bg-gray-200 dark:bg-gray-900">
      <div className="h-[200px] bg-gray-100 dark:bg-gray-800 rounded-xl"></div>
      <div className="h-7 bg-gray-100 dark:bg-gray-800 mt-5 rounded-xl"></div>
      <div className="h-5 bg-gray-100 dark:bg-gray-800 mt-5 rounded-xl"></div>
    </div>
  );
};

export default CardSkeleton;
