import React from "react";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import { connect } from "react-redux";
import redEnemy from "../assets/red_enemy.png";
import CombatScreen from "../components/CombatScreen";
import { handleGoToCombat } from "../redux/actions";
import { handleNextLevel } from "../redux/actions";
import wall from "../assets/whole_wall.png";
import chest from "../assets/chest.png"

class Level3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCombat: false
    };
  }

  chestDetection = () => {
    const chest = "chest2"
    if (
      (this.props.playerPosition[0] === this.props.chests[1].position[0]) &
      (this.props.playerPosition[1] === this.props.chests[1].position[1])
    ) {
      this.props.foundChest(chest);
    }
  };

  enemyCollision = () => {
    const enemy = "enemy3";
    if (
      (this.props.playerPosition[0] === this.props.enemies.enemy3.position[0]) &
      (this.props.playerPosition[1] === this.props.enemies.enemy3.position[1])
    ) {
      if (this.props.enemies.enemy3.health === 0) {
        return;
      } else {
        this.props.handleGoToCombat(enemy);
      }
    }
  };

  componentDidMount() {
    window.onkeyup = e => {
      this.enemyCollision(e);
      this.doorDetection(e);
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
            top: 96,
            left: 62,
            width: "46px",
            height: "46px"
          }}
        >
          <img
            src={wall}
            alt="a wall"
            style={{
              width: "32px",
              height: "96px"
            }}
          />
        </div>
        <div 
             style={{
                position: "absolute",
                top: this.props.chests[2].position[0],
                left: this.props.chests[2].position[1],
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
            {this.props.enemies.enemy3.health === 0 ? (
              <div />
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: this.props.enemies.enemy3.position[1],
                  left: this.props.enemies.enemy3.position[0],
                  zIndex: this.props.enemies.enemy3.position[2],
                  width: "46px",
                  height: "46px"
                }}
              >
                <img
                  src={redEnemy}
                  alt="an enemy"
                  style={{
                    width: "46px",
                    height: "46px"
                  }}
                />
              </div>
            )}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 62,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 138,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 191,
                left: 62,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 62,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 138,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 138,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 169,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 200,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 230,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div> 
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 261,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 292,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 323,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 354,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div> 
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 385,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 416,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 447,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 169,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 200,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 230,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 261,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 292,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 323,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 354,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div> 
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 385,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 416,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 250,
                left: 447,
                width: "46px",
                height: "46px"
              }}
            >
              <img
                src={wall}
                alt="a wall"
                style={{
                  width: "32px",
                  height: "96px",

                }}
              />
            
            {}
          
          </div>
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
  handleGoToCombat: enemy => dispatch(handleGoToCombat(enemy)),
  handleNextLevel: (level) => dispatch(handleNextLevel(level))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level3);
