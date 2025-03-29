import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";
import Spinner from "./Spinner";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) {
    return (
      <Spinner />
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
                genre.id === selectedGenreId ? "font-bold" : "font-normal"
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
