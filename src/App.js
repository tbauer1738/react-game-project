import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { LEFT, RIGHT, UP, DOWN } from "./helpers/constants";
import toon1 from "./assets/toon.png";
import toon2 from "./assets/toon2.png";
import tile70x70 from "./assets/tile_70x70.png";
import CharacterCreation from "./components/CharacterCreation";
import dungeon_tile from "./assets/dungeon_tile.png";
import dungeon_tiles from "./assets/dungeon_tiles.png";
import Tutorial from "./assets/Tutorial.png";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        position: [46, 92]
      }
    };
  }

  handleKeyDown = e => {
    let newDirection;

    switch (e.keyCode) {
      case 37:
        newDirection = { top: 0, left: -46, dir: LEFT };
        break;
      case 38:
        newDirection = { top: -46, left: 0, dir: UP };
        break;
      case 39:
        newDirection = { top: 0, left: 46, dir: RIGHT };
        break;
      case 40:
        newDirection = { top: 46, left: 0, dir: DOWN };
        break;
      default:
        return;
    }

    this.handlePlayerMovement(newDirection);
  };

  handlePlayerMovement = dirObj => {
    this.setState({
      player: {
        position: [
          this.state.player.position[0] + dirObj.left,
          this.state.player.position[1] + dirObj.top
        ]
      }
    });
  };

  componentDidMount() {
    window.onkeydown = this.handleKeyDown;
  }

  render() {
    console.log(this.props);
    if (this.props.gameReducer.characterCreated === false) {
      return <CharacterCreation />;
    } else {
      return (
        <>
          <div className="App">
            <div
              style={{
                width: "600px",
                height: "350px"
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: this.state.player.position[1],
                  left: this.state.player.position[0],
                  width: "46px",
                  height: "46px"
                }}
              >
                <img
                  src={
                    this.props.playerReducer.toon === "toon1" ? toon1 : toon2
                  }
                  alt="toon"
                  style={{
                    width: "46px",
                    height: "46px"
                  }}
                />
              </div>

              {/* <div
                className="Tutorial"
                style={{
                  width: "90px",
                  height: "95px"
                }}
              />
              <div
                className="floortile"
                style={{
                  width: "90px",
                  height: "115px"
                }}
              /> */}
              {/* <img
                src={tile70x70}
                alt="toon"
                style={{
                  width: "140px",
                  height: "140px"
                }}
              />
              <img
                src={tile70x70}
                alt="toon"
                style={{
                  width: "140px",
                  height: "140px"
                }}
              />
              <img
                src={tile70x70}
                alt="toon"
                style={{
                  width: "140px",
                  height: "140px"
                }}
              />
              <img
                src={tile70x70}
                alt="toon"
                style={{
                  width: "140px",
                  height: "140px"
                }}
              />
              <img
                src={tile70x70}
                alt="toon"
                style={{
                  width: "140px",
                  height: "140px"
                }}
              /> */}
            </div>
          </div>
        </>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
