import usePlatforms, {Platform} from "../hooks/usePlatfroms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <select
      className="px-4 py-2 dark:bg-zinc-900 border rounded-lg w-50"
      onChange={(e) => {
        const selectedId = Number(e.target.value);
        const selectedPlatform = data?.results.find((platform) => platform.id === selectedId);
        if (selectedPlatform) onSelectPlatform(selectedPlatform);
      }}
    >
      <option value="" hidden>Platforms</option>
      {data?.results.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;