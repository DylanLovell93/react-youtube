import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './ResultVideo.css';

const ResultVideo = (props) => {
  const [play, setPlay] = useState(false);
  return (
    <div className="ResultVideo" key={props.vid.id.videoId}>
      <ReactPlayer
        className="player"
        key={props.vid.id.videoId}
        onMouseEnter={() => setPlay(true)}
        onMouseLeave={() => setPlay(false)}
        modestbranding="0"
        url={'https://youtube.com/embed/' + props.vid.id.videoId}
        playing={play}
        showinfo="0"
        volume="0"
        frameborder="0"
        width="fit-content"
        height="fit-content"
      />

      <div className="link">
        <Link to={`/videos/${props.vid.id.videoId}`}>
          <h3>{props.vid.snippet.title}</h3>
        </Link>
      </div>
    </div>
  );
};
export default ResultVideo;
