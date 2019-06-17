import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { LEFT, RIGHT, UP, DOWN } from "./helpers/constants";

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
        newDirection = { top: 0, left: -200, dir: LEFT };
        break;
      case 38:
        newDirection = { top: -200, left: 0, dir: UP };
        break;
      case 39:
        newDirection = { top: 0, left: 200, dir: RIGHT };
        break;
      case 40:
        newDirection = { top: 200, left: 0, dir: DOWN };
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
    return (
      <>
        <div className="App">
          <div
            style={{
              position: "relative",
              top: this.state.player.position[1],
              left: this.state.player.position[0],
              backgroundImage:
                "url(https://i.pinimg.com/236x/c1/de/ca/c1decabbc85f80eee50c173bac99f5e1.jpg)",

              width: "200px",
              height: "200px"
            }}
          />
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
