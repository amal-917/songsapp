import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { BsFileEarmarkCheck } from "react-icons/bs";
import uuid from "react-uuid";
import Song from "../songs.json";
import {
  MdFavorite,
  GrFavorite,
  IoMdArrowRoundBack,
  HiStatusOnline,
} from "react-icons/all";
import "./index.css";
const SongDetails = (props) => {
  const { one } = props.location.state;
  const { history } = props;

  const getBackword = () => {
    history.replace("/");
  };

  return (
    <div className="details-container">
      <div className="back-button" onClick={getBackword}>
        <IoMdArrowRoundBack />
      </div>
      <div className="song-details">
        <div className="details">
          <img src={one.cover} alt={one.name} className="image-cover" />
          <div className="title">
            <h1 className="song-title">{one.name}</h1>
            <p className="artist-name">Artist: {one.artist}</p>
            <p className="song-description-second">{one.description}</p>
            <div className="fav-section">
              <div>
                {one.favorited ? (
                  <MdFavorite className="red size-love" />
                ) : (
                  <GrFavorite className="size-love" />
                )}
              </div>
              <div className="styling-fav">{one.new && "New"}</div>
              <div className="styling-fav">{one.trending && "Trending"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="similar-container">
        <p className="similar-head">Similar Artist</p>
        <div className="similar-items">
          {Song.filter((each) => each.artist === one.artist).map((each) => (
            <Link
              to={{ pathname: `/${each.name}`, state: { one: each } }}
              className="link"
              key={uuid()}
            >
              <div className="similar-each-container">
                <img src={each.cover} alt={each.name} className="img-similar" />
                <p className="track-name">{one.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="audio-container">
        <audio controls="controls">
          <source src="song.ogg" type="audio/ogg" />
          <source src={one.source} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default withRouter(SongDetails);
