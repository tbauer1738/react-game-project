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
import Level1 from "./components/Level1";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        position: [0, 0]
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
    console.log("dirObj: ", dirObj);

    if ((this.state.player.position[1] <= 0) & (dirObj.top < 0)) {
      return;
    } else if ((this.state.player.position[1] >= 276) & (dirObj.top > 0)) {
      return;
    } else if ((this.state.player.position[0] <= 0) & (dirObj.left < 0)) {
      return;
    } else if ((this.state.player.position[0] >= 552) & (dirObj.left > 0)) {
      return;
    } else {
      this.setState({
        player: {
          position: [
            this.state.player.position[0] + dirObj.left,
            this.state.player.position[1] + dirObj.top
          ]
        }
      });
    }
  };

  componentDidMount() {
    window.onkeydown = this.handleKeyDown;
  }

  render() {
    if (this.props.gameReducer.characterCreated === false) {
      return <CharacterCreation />;
    } else {
      return (
        <>
          <Level1 playerPosition={this.state.player.position} />
        </>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
