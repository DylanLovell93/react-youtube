import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Result from "./Components/Result";
import About from "./Components/About";
import Video from "./Components/Video";
import PopularVideo from "./Components/PopularVideos";
import { useState } from "react";
import Favorite from "./Components/Favorite";

const App = () => {
  const [fav, setFav] = useState("");

  const handleFav = (video) => {
    setFav([...fav, video]);
  };

  const handleDelete = (video) => {
    const remainder = fav.filter((favorites) => favorites.id.videoId !== video.id.videoId);
    setFav(remainder);
  };

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="body">
                <PopularVideo handleFav={handleFav} fav={fav} />
                <div className="favorites">
                  <Favorite fav={fav} handleDelete={handleDelete} />
                </div>
              </div>
            }
          />
          <Route
            path="/videos/search_query=:search"
            element={
              <div className="body">
                <Result handleFav={handleFav} fav={fav} />
                <div className="favorites">
                  <Favorite fav={fav} handleDelete={handleDelete} />
                </div>
              </div>
            }
          />
          <Route path="/videos/:id" element={<Video />} fav={fav}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
