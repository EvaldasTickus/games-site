interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "=metacritic", label: "Popularity" },
    { value: "=rating", label: "Average rating" },
  ];


  return (
    <select
      className="px-4 py-2 dark:bg-gray-950 border rounded-lg"
      onChange={(e) => onSelectSortOrder(e.target.value)} // ✅ Use onChange here
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
