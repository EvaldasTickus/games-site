import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-urls';

const GenreList = () => {
  const {data} = useGenres();

  return (
    <ul>
      {data.map(genre =>
        <div className='flex py-2' key={genre.id}>
          <img className='w-12 h-12 rounded-lg' src={getCroppedImageUrl(genre.image_background)} />
          <button className='px-5 text-xl' >{genre.name}</button>
        </div>
      )}
    </ul>
  )
}

export default GenreList