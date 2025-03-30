import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "=metacritic", label: "Popularity" },
    { value: "=rating", label: "Average rating" },
  ];

  const setSortOrder =  useGameQueryStore(s => s.setSortOrder)

  return (
    <select
      className="px-4 py-2 dark:bg-zinc-900 border rounded-lg w-55"
      onChange={(e) => setSortOrder(e.target.value)} // ✅ Use onChange here
    >
      <option value="" hidden>
        Order by : Relevance
      </option>
      {sortOrders.map((order) => (
        <option key={order.value} value={order.value}>
          Order by : {order.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
