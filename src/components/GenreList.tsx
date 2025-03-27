import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

const GenreList = () => {
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
          <button className="px-5 text-xl">{genre.name}</button>
        </div>
      ))}
    </ul>
  );
};

export default GenreList;
