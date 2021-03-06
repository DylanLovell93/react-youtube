import './Result.css';
import ResultVideo from './ResultVideo';
import './Favorite.css';

let favorites = null;

const Favorite = (props) => {
  console.log(props.fav);
  if (props.fav) {
    favorites = props.fav.map((video) => (
      <div className="favVid">
        <button className="favButton" onClick={() => props.handleDelete(video)}>
          Remove
        </button>
        <ResultVideo vid={video} />
      </div>
    ));
  }

  return (
    <details>
      <summary>
        <strong>Favorite Videos</strong>
      </summary>
      {favorites ? favorites : 'No Videos Saved'}
    </details>
  );
};

export default Favorite;
