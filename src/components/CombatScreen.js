import React from "react";
import { connect } from "react-redux";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import blueenemy from "../assets/blue_enemy.png";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class CombatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: true,
      enemies: {
        enemy1: {
          health: 100,
          xpWorth: 50,
          abilities: [
            {
              name: "Struggle",
              damage: 0
            }
          ]
        }
      },
      combatLog: []
    };
  }

  handleDamage = () => {};

  render() {
    return (
      <div className="combatScreen">
        {" "}
        <div className="combatFrameLeft">
          <div id="playerHealthBar">
            <div style={{ width: this.props.playerReducer.health }} />
          </div>
          <img
            src={this.props.playerReducer.toon === "toon" ? toon : toon2}
            alt=""
            style={{
              width: "92px",
              height: "92px"
            }}
          />
          <div className="abilities">
            {this.props.playerReducer.abilities.map(ability => {
              return (
                <div value={ability.name}>
                  {ability.name}&nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {ability.damage.toString()}dmg <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div className="combatLog">
          {this.state.combatLog.map(action => {
            return <div>{action.name}</div>;
          })}
        </div>
        <div className="combatFrameRight">
          <div id="enemyHealthBar">
            <div />
          </div>
          <img
            src={blueenemy}
            alt=""
            style={{
              width: "92px",
              height: "92px"
            }}
          />
          <div className="abilities">
            {this.state.enemies.enemy1.abilities.map(ability => {
              return (
                <div>
                  {ability.name} &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {ability.damage.toString()}dmg <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CombatScreen);
