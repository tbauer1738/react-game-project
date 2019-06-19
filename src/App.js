import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { LEFT, RIGHT, UP, DOWN } from "./helpers/constants";
import CharacterCreation from "./components/CharacterCreation";
import Level1 from "./components/Level1";

const mapStateToProps = state => ({
  ...state.gameReducer
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
    if (this.props.characterCreated === false) {
      return <CharacterCreation />;
    } else {
      switch (this.props.level) {
        case 1:
          return <Level1 playerPosition={this.state.player.position} />;
        default:
          return;
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
