import "./Result.css";
import { useState, useEffect } from "react";
import ResultVideo from "./ResultVideo";
import Favorite from "./Favorite";

const PopularVideo = (props) => {
  const [data, setData] = useState("");

  let result = null;
  let favorite = null;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=12&part=snippet&q=greatest+videos+on+youtube+&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log('error');
      });
  }, []);

  if (data) {
     result = !data.error
      ? data.items.map((element) => (
           <div className="vid">
            <button className="button" onClick={() => props.handleFav(element)}>
              Add To Favorites
            </button>
            <ResultVideo vid={element} />
          </div>
          ));
      : data.error.errors.map((error) => <p>{error.message}</p>);

    favorite = (
      <div>
        <Favorite fav={props.fav} />
      </div>
    );
  }

  return (
    <div className="Result">
      <div className="videos">{result ? result : "Loading"}</div>
      <div className="favorites">{favorite}</div>
    </div>
  );
};

export default PopularVideo;
