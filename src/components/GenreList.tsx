import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) {
    return <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  } 
  return (
    <ul>
      {data.map((genre) => (
        <div className="flex py-2" key={genre.id}>
          <img
            className="w-12 h-12 rounded-lg"
            src={getCroppedImageUrl(genre.image_background)}
          />
          <button onClick={() => onSelectGenre(genre)} className="px-5 text-xl cursor-pointer"><a className="hover:underline">{genre.name}</a></button>
        </div>
      ))}
    </ul>
  );
};

export default GenreList;
