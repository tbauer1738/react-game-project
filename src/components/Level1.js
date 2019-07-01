import React from "react";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import { connect } from "react-redux";
import door from "../assets/door.png";
import blueEnemy from "../assets/blue_enemy.png";
import CombatScreen from "../components/CombatScreen";
import { handleGoToCombat } from "../redux/actions";
import { handleNextLevel } from "../redux/actions";
import { foundChest } from "../redux/actions";
import {handleXPGain } from "../redux/actions"
import chest from "../assets/chest.png";

class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  chestDetection = () => {
    const chest = "chest1"
    if (
      (this.props.playerPosition[0] ===  this.props.chests[0].position[0]) &
      (this.props.playerPosition[1] === this.props.chests[0].position[1])
    ) {
      this.props.foundChest(chest);
    }
  };

  doorDetection = () => {
    const level = 2
    if (
      (this.props.playerPosition[0] === 506) &
      (this.props.playerPosition[1] === 138)
    ) {
      this.props.handleXPGain(50);
      this.props.handleNextLevel(level);
    }
  };

 
  enemyCollision = () => {
    const enemy = "enemy1";
    if (
      (this.props.playerPosition[0] === this.props.enemies.enemy1.position[0]) &
      (this.props.playerPosition[1] === this.props.enemies.enemy1.position[1])
    ) {
      if (this.props.enemies.enemy1.health === 0) {
        return;
      } else {
        this.props.handleGoToCombat(enemy);
      }
    }
  };

  componentDidMount() {
    window.onkeyup = e => {
      this.doorDetection(e);
      this.enemyCollision(e);
      this.chestDetection(e);
    };
  }

  render() {
    if (this.props.inCombat === true) {
      return (
        <CombatScreen
          enemyDead={this.enemyDead}
          enemy={this.props.inCombatWith}
        />
      );
    }else{
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
                top: this.props.chests[0].position[0],
                left: this.props.chests[0].position[1],
                width: "46px",
                height: "46px"
              }}
            >
             <img
                src={chest}
                alt="chest"
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
            {}
            {this.props.enemies.enemy1.health === 0 ? (
              <div />
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: this.props.enemies.enemy1.position[1],
                  left: this.props.enemies.enemy1.position[0],
                  zIndex: this.props.enemies.enemy1.position[2],
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
            )}
          </div>
        </div>
      )};
    }
  }


const mapStateToProps = state => ({
  ...state.playerReducer,
  ...state.enemyReducer,
  ...state.gameReducer
});

const mapDispatchToProps = dispatch => ({
  handleGoToCombat: enemy => dispatch(handleGoToCombat(enemy)),
  handleNextLevel: (level) => dispatch(handleNextLevel(level)),
  foundChest: (chest) => dispatch(foundChest(chest)),
  handleXPGain: xp => dispatch(handleXPGain(xp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level1);
