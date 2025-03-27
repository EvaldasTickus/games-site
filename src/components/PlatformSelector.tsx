import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatfroms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <select
      className="px-4 py-2 dark:bg-gray-950 border rounded-lg w-50"
      onChange={(e) => {
        const selectedId = Number(e.target.value);
        const selectedPlatform = data.find((platform) => platform.id === selectedId);
        if (selectedPlatform) onSelectPlatform(selectedPlatform);
      }}
    >
      <option value="" hidden>Platforms</option>
      {data.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;