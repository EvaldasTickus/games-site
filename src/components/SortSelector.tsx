const SortSelector = () => {
  return (
    <select
      className="px-4 py-2 dark:bg-gray-950 border rounded-lg"
    >
      <option value="" hidden>
        Order by: Relevance
      </option>
      <option value="relevance">Relevance</option>
      <option value="date">Date added</option>
      <option value="name">Name</option>
      <option value="release">Release date</option>
      <option value="popularity">Popularity</option>
      <option value="average">Average rating</option>
    </select>
  );
};

export default SortSelector;
