import { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import { withRouter } from "react-router";
import { FiSearch } from "react-icons/all";
import uuid from "react-uuid";
import Songs from "../songs.json";
import "./index.css";

class Home extends Component {
  state = { song: Songs, userInput: "", isTrue: "" };

  newRelease = () => {
    this.setState({ song: Songs.filter((each) => each.new === true) });
  };

  getAll = () => {
    this.setState({ song: Songs, isTrue: "text" });
  };

  getTrending = () => {
    this.setState({ song: Songs.filter((each) => each.trending === true) });
  };

  searchSong = (event) => {
    const { userInput } = this.state;
    const userInputOne = event.target.value;
    this.setState({
      userInput: userInputOne,
      song: Songs.filter((each) =>
        each.name.toLowerCase().includes(userInputOne.toLowerCase())
      ),
    });
  };

  render() {
    const { song, userInput, isTrue } = this.state;

    return (
      <>
        <div className="main-background-container container">
          <div className="top-container">
            <div className="top">
              <input
                type="search"
                className="input"
                placeholder="search"
                value={userInput}
                onChange={this.searchSong}
              />
              <FiSearch className="search-icon" />
            </div>
            <div className="filters-container">
              <button
                type="button"
                onClick={this.getAll}
                className={`filters ${isTrue}`}
              >
                <p>All</p>
              </button>
              <button
                type="button"
                onClick={this.getTrending}
                className={`filters ${isTrue}`}
              >
                <p>Trending</p>
              </button>
              <button
                type="button"
                onClick={this.newRelease}
                className={`filters ${isTrue}`}
              >
                <p>New Release</p>
              </button>
            </div>
            <div className="crousal">
              <Carousel
                slides={Songs.map((each, index) => (
                  <>
                    <div
                      style={{ backgroundImage: `url(${each.cover})` }}
                      className="song-carousal-container"
                      key={uuid()}
                    >
                      <p className="name">{each.name}</p>
                      <p>{each.artist}</p>
                    </div>
                  </>
                ))}
                autoplay={false}
                className="arrows"
              />
            </div>
            <div className="thumbs">
              {song.map((each, index) => (
                <div className="song-thumb-container" key={uuid()}>
                  <Link
                    to={{ pathname: `/${each.name}`, state: { one: each } }}
                    className="link"
                  >
                    <p className="song-name-head">{each.name}</p>
                    <p className="song-description">{each.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
