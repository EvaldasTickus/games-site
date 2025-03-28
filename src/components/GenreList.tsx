import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) {
    return (
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    );
  }
  return (
    <>
      <h1 className="text-2xl mb-3">Genres</h1>
      <ul>
        {data?.results.map((genre) => (
          <div className="flex py-2" key={genre.id}>
            <img
              className="w-13 h-13 rounded-lg object-cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <button
              onClick={() => onSelectGenre(genre)}
              className={`px-5 text-xl cursor-pointer text-left ${
                genre.id === selectedGenre?.id ? "font-bold" : "font-normal"
              }`}
            >
              <a
                className="hover:underline"
              >
                {genre.name}
              </a>
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
