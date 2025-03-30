import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <select
      className="px-4 py-2 dark:bg-zinc-900 border rounded-lg w-50"
      onChange={(e) => {
        const selectedId = Number(e.target.value);
        setSelectedPlatformId(selectedId);
      }}
    >
      <option value="" hidden>Platforms</option>
      {data?.results?.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;