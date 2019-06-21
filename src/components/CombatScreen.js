import React from "react";
import { connect } from "react-redux";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import blueenemy from "../assets/blue_enemy.png";
import { handleEnemyDamage } from "../redux/actions";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  handleEnemyDamage: damage => dispatch(handleEnemyDamage(damage))
});

class CombatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: true,
      combatLogPlayer: [],
      combatLogEnemy: []
    };
  }

  handleEnemyAbility = () => {
    const randomAbility = this.props.enemyReducer.enemies.enemy1.abilities[
      Math.floor(Math.random() * 3)
    ];
    console.log("randomAbility: ", randomAbility);

    if (randomAbility.damage >= this.props.playerReducer.health) {
      console.log("Oh dear, you're dead!");
      this.setState({
        playersTurn: true,
        combatLogEnemy: [
          ...this.state.combatLogEnemy,
          { name: randomAbility.name, damage: randomAbility.damage }
        ]
      });
    } else {
      this.props.handleEnemyDamage(randomAbility.damage);

      this.setState({
        playersTurn: true,
        combatLogEnemy: [
          ...this.state.combatLogEnemy,
          { name: randomAbility.name, damage: randomAbility.damage }
        ]
      });
    }
  };

  handlePlayerAbility = (e, abilityName, abilityDamage) => {
    if (this.state.playersTurn === true) {
      if (abilityDamage >= this.props.enemyReducer.enemies.enemy1.health) {
        this.setState({
          enemies: {
            enemy1: {
              ...this.props.enemyReducer.enemies.enemy1,
              health: 0
            }
          },
          combatLogPlayer: [
            ...this.state.combatLogPlayer,
            { name: abilityName, damage: abilityDamage }
          ]
        });
      } else {
        this.setState(
          {
            playersTurn: false,
            enemies: {
              enemy1: {
                ...this.props.enemyReducer.enemies.enemy1,
                health:
                  this.props.enemyReducer.enemies.enemy1.health - abilityDamage
              }
            },
            combatLogPlayer: [
              ...this.state.combatLogPlayer,
              { name: abilityName, damage: abilityDamage }
            ]
          },
          this.handleEnemyAbility
        );
      }
    }
  };

  handleDamage = () => {};

  render() {
    return (
      <div className="combatScreen">
        {" "}
        <div className="combatFrameLeft">
          <div id="playerHealthBar">
            <div style={{ width: this.props.playerReducer.health + "%" }} />
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
                <div
                  value={ability.name}
                  onClick={e =>
                    this.handlePlayerAbility(e, ability.name, ability.damage)
                  }
                >
                  {ability.name}&nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {ability.damage.toString()}dmg <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div className="combatLog">
          {this.state.combatLogPlayer.map(action => {
            return (
              <div>
                {this.props.playerReducer.name} used {action.name} for&nbsp;
                {action.damage} damage!
              </div>
            );
          })}
        </div>
        <div className="combatLog">
          {this.state.combatLogEnemy.map(action => {
            return (
              <div>
                Enemy used {action.name} for&nbsp;
                {action.damage} damage!
              </div>
            );
          })}
        </div>
        <div className="combatFrameRight">
          <div id="enemyHealthBar">
            <div
              style={{
                width: this.props.enemyReducer.enemies.enemy1.health + "%"
              }}
            />
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
            {this.props.enemyReducer.enemies.enemy1.abilities.map(ability => {
              return (
                <div>
                  {ability.name}&nbsp; &nbsp; &nbsp; &nbsp;{" "}
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
