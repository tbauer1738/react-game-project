import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { LEFT, RIGHT, UP, DOWN } from "./helpers/constants";
import { handlePlayerMovement } from "./redux/actions";
import CharacterCreation from "./components/CharacterCreation";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import LevelUpScreen from "./components/LevelUpScreen";
import {handleNextLevel} from "./redux/actions"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    switch (this.props.level) {
      case 1:
        if ((this.props.position[1] <= 0) & (dirObj.top < 0)) {
          return;
        } else if ((this.props.position[1] >= 276) & (dirObj.top > 0)) {
          return;
        } else if ((this.props.position[0] <= 0) & (dirObj.left < 0)) {
          return;
        } else if ((this.props.position[0] >= 552) & (dirObj.left > 0)) {
          return;
        } else {
          const left = this.props.position[0] + dirObj.left;
          const top = this.props.position[1] + dirObj.top;
          this.props.handlePlayerMovement(left, top, this.props.level);
        }
        break;
      case 2:
        if ((this.props.position[1] <= 0) & (dirObj.top < 0)) {
          return;
        } else if ((this.props.position[1] >= 276) & (dirObj.top > 0)) {
          return;
        } else if ((this.props.position[0] <= 0) & (dirObj.left < 0)) {
          return;
        } else if ((this.props.position[0] >= 552) & (dirObj.left > 0)) {
          return;
        } else if (
          (this.props.position[0] <= 184) &
          (this.props.position[1] < 92) &
          (dirObj.left < 0)
        ) {
          return;
        } else if (
          (this.props.position[0] === 138) &
          (this.props.position[1] <= 92) &
          (dirObj.top < 0)
        ) {
          return;
        } else if (
          (this.props.position[0] === 46) &
          (this.props.position[1] <= 92) &
          (dirObj.top < 0)
        ) {
          return;
        } else if (
          (this.props.position[0] === 0) &
          (this.props.position[1] < 92) &
          (dirObj.left > 0)
        ) {
          return;
        } else if (
          (this.props.position[0] === 92) &
          (this.props.position[1] === 46) &
          (dirObj.left > 0)
        ) {
          return;
        } else {
          const left = this.props.position[0] + dirObj.left;
          const top = this.props.position[1] + dirObj.top;
          this.props.handlePlayerMovement(left, top, this.props.level);
        }
        break;
      case 3:
          if ((this.props.position[1] <= 0) & (dirObj.top < 0)) {
            return;
          } else if ((this.props.position[1] >= 276) & (dirObj.top > 0)) {
            return;
          } else if ((this.props.position[0] <= 0) & (dirObj.left < 0)) {
            return;
          } else if ((this.props.position[0] >= 552) & (dirObj.left > 0)) {
            return;
          } else if (
            (this.props.position[0] <= 276) &
            (this.props.position[1] < 92) &
            (dirObj.left < 0)
          ){
            return;
          } else if (
            (this.props.position[0] === 92) &
            (this.props.position[1] < 184) &
            (dirObj.left > 0)
          ){
            return;
          } else if(
            (this.props.position[0] === 92) &
            (this.props.position[1] >= 0) &
            (dirObj.left < 0)
          ){
            return;
          } else if (
            (this.props.position[0] > 92) &
            (this.props.position[1] === 184) &
            (dirObj.top > 0)
          ) {
            return;
          }else if (
            (this.props.position[0] > 92) &
            (this.props.position[1] === 184) &
            (dirObj.top < 0)
          ) {
            return;
          }else if (
            (this.props.position[0] < 92) &
            (this.props.position[1] === 184) &
            (dirObj.top < 0)
          ) {
            return;
          } else if (
            (this.props.position[0] === 46) &
            (this.props.position[1] <= 92) &
            (dirObj.top < 0)
          ) {
            return;
          } else if (
            (this.props.position[0] === 0) &
            (this.props.position[1] < 92) &
            (dirObj.left > 0)
          ) {
            return;
          } else if (
            (this.props.position[0] === 92) &
            (this.props.position[1] === 46) &
            (dirObj.left > 0)
          ) {
            return;
          } else {
            const left = this.props.position[0] + dirObj.left;
            const top = this.props.position[1] + dirObj.top;
            this.props.handlePlayerMovement(left, top, this.props.level);
          }
          break;
      default:
        return;
    }
  };


  componentDidMount() {
    window.onkeydown = this.handleKeyDown
  }

  
  render() {
    if (this.props.characterCreated === false) {
      return <CharacterCreation />;
    } else if(this.props.xp === 100){
      return <LevelUpScreen />
    }else{
      switch (this.props.level) {
        case 1:
          return <Level1 playerPosition={this.props.position} />;
        case 2:
          return <Level2 playerPosition={this.props.position} />;
        case 3:
          return <Level3 playerPosition={this.props.position} />;
        default:
          return;
      }
    }
  }
}

const mapStateToProps = state => ({
  ...state.gameReducer,
  ...state.playerReducer
});

const mapDispatchToProps = dispatch => ({
  handlePlayerMovement: (left, top) => dispatch(handlePlayerMovement(left, top)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
