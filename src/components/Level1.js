import React from "react";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import { connect } from "react-redux";
import door from "../assets/door.png";
import blueEnemy from "../assets/blue_enemy.png";
import CombatScreen from "../components/CombatScreen";

const mapStateToProps = state => ({
  ...state.playerReducer
});

class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCombat: false,
      enemies: {
        enemy1: {
          health: 100,
          sprite: { blueEnemy },
          position: [414, 138],
          xpWorth: 50,
          abilities: [
            {
              name: "struggle",
              damage: 0
            }
          ]
        }
      }
    };
  }
  doorDetection = () => {
    if (
      (this.props.playerPosition[0] === 506) &
      (this.props.playerPosition[1] === 138)
    ) {
      console.log("found the door");
    }
  };

  enemyCollision = () => {
    if (
      (this.props.playerPosition[0] === this.state.enemies.enemy1.position[0]) &
      (this.props.playerPosition[1] === this.state.enemies.enemy1.position[1])
    ) {
      this.setState({
        ...this.state,
        inCombat: true
      });
    }
  };

  componentDidMount() {
    window.onkeyup = e => {
      this.doorDetection(e);
      this.enemyCollision(e);
    };
  }

  render() {
    if (this.state.inCombat === true) {
      return <CombatScreen />;
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
                top: 138,
                left: 506,
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
            <div
              style={{
                position: "absolute",
                top: this.state.enemies.enemy1.position[1],
                left: this.state.enemies.enemy1.position[0],
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={blueEnemy}
                alt="an enemy"
                style={{
                  width: "46px",
                  height: "46px"
                }}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps)(Level1);
