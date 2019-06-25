import React from "react";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import { connect } from "react-redux";
import door from "../assets/door.png";
import greenEnemy from "../assets/green_enemy.png";
import CombatScreen from "../components/CombatScreen";
import { handleGoToCombat } from "../redux/actions";
import { handleNextLevel } from "../redux/actions";

class Level2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCombat: false
    };
  }

  doorDetection = () => {
    if (
      (this.props.playerPosition[0] === 92) &
      (this.props.playerPosition[1] === 46) &
      (this.props.playerPosition[2] === 2)
    ) {
      this.props.handleNextLevel();
    }
  };

  //z position for different levels
  enemyCollision = () => {
    if (
      (this.props.playerPosition[0] === this.props.enemies.enemy2.position[0]) &
      (this.props.playerPosition[1] === this.props.enemies.enemy2.position[1])
    ) {
      if (this.props.enemies.enemy2.health === 0) {
        return;
      } else {
        this.props.handleGoToCombat();
      }
    }
  };

  componentDidMount() {
    window.onkeyup = e => {
      this.doorDetection(e);
      this.enemyCollision(e);
    };
  }

  render() {
    if (this.props.inCombat === true) {
      return <CombatScreen enemyDead={this.enemyDead} />;
    } else {
      return (
        <div className="App">
          <div
            className="board"
            style={{
              width: "600px",
              height: "350px"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: this.props.playerPosition[1],
                left: this.props.playerPosition[0],
                zIndex: this.props.level,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={this.props.toon === "toon" ? toon : toon2}
                alt="toon"
                style={{
                  width: "46px",
                  height: "46px"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 46,
                left: 92,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={door}
                alt="a door"
                style={{
                  width: "46px",
                  height: "46px"
                }}
              />
            </div>
            {}
            {this.props.enemies.enemy2.health === 0 ? (
              <div />
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: this.props.enemies.enemy2.position[1],
                  left: this.props.enemies.enemy2.position[0],
                  zIndex: this.props.enemies.enemy2.position[2],
                  width: "46px",
                  height: "46px"
                }}
              >
                <img
                  src={greenEnemy}
                  alt="an enemy"
                  style={{
                    width: "46px",
                    height: "46px"
                  }}
                />
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  ...state.playerReducer,
  ...state.enemyReducer,
  ...state.gameReducer
});

const mapDispatchToProps = dispatch => ({
  handleGoToCombat: () => dispatch(handleGoToCombat()),
  handleNextLevel: () => dispatch(handleNextLevel())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level2);
