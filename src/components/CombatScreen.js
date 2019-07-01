import React from "react";
import { connect } from "react-redux";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import blueenemy from "../assets/blue_enemy.png";
import greenenemy from "../assets/green_enemy.png";
import { handleEnemyDamage } from "../redux/actions";
import { handlePlayerDamage } from "../redux/actions";
import DeathScreen from "./DeathScreen";

class CombatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDead: false,
      playersTurn: true,
      combatLogPlayer: [],
      combatLogEnemy: []
    };
  }

  handleDeath = () => {
    this.setState({
      isDead: true
    });
  };

  handleEnemyAbility = () => {
    const randomAbility = this.props.enemyReducer.inCombatWith.abilities[
      Math.floor(Math.random() * 3)
    ];

    if (randomAbility.damage >= this.props.playerReducer.health) {
      window.setTimeout(() => {
        this.props.handlePlayerDamage(randomAbility.damage);
        this.setState({
          playersTurn: true,
          combatLogEnemy: [
            ...this.state.combatLogEnemy,
            { name: randomAbility.name, damage: randomAbility.damage }
          ]
        });
        this.handleDeath();
      }, 500);
    } else {
      window.setTimeout(() => {
        this.props.handlePlayerDamage(randomAbility.damage);
        this.setState({
          playersTurn: true,
          combatLogEnemy: [
            ...this.state.combatLogEnemy,
            { name: randomAbility.name, damage: randomAbility.damage }
          ]
        });
      }, 500);
    }
  };

  handlePlayerAbility = (e, abilityName, abilityDamage) => {
    switch (this.props.enemyReducer.inCombatWith.name) {
      case "enemy1":
        if (this.state.playersTurn === true) {
          if (this.props.enemyReducer.enemies.enemy1.health === 0) {
          } else if (
            abilityDamage >= this.props.enemyReducer.enemies.enemy1.health
          ) {
            this.props.handleEnemyDamage(abilityDamage);

            this.setState({
              combatLogPlayer: [
                ...this.state.combatLogPlayer,
                { name: abilityName, damage: abilityDamage }
              ]
            });
          } else {
            this.props.handleEnemyDamage(abilityDamage);
            this.setState(
              {
                playersTurn: false,

                combatLogPlayer: [
                  ...this.state.combatLogPlayer,
                  { name: abilityName, damage: abilityDamage }
                ]
              },
              this.handleEnemyAbility
            );
          }
        }
        break;
      case "enemy2":
        if (this.state.playersTurn === true) {
          if (this.props.enemyReducer.enemies.enemy2.health === 0) {
          } else if (
            abilityDamage >= this.props.enemyReducer.enemies.enemy2.health
          ) {
            this.props.handleEnemyDamage(abilityDamage);

            this.setState({
              combatLogPlayer: [
                ...this.state.combatLogPlayer,
                { name: abilityName, damage: abilityDamage }
              ]
            });
          } else {
            this.props.handleEnemyDamage(abilityDamage);
            this.setState(
              {
                playersTurn: false,

                combatLogPlayer: [
                  ...this.state.combatLogPlayer,
                  { name: abilityName, damage: abilityDamage }
                ]
              },
              this.handleEnemyAbility
            );
          }
        }
        break;
      default:
        return;
    }
  };

  render() {
    if (this.state.isDead === true) {
      return <DeathScreen />;
    }
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
                width:
                  this.props.enemyReducer.inCombatWith.name === "enemy1"
                    ? this.props.enemyReducer.enemies.enemy1.health + "%"
                    : this.props.enemyReducer.enemies.enemy2.health + "%"
              }}
            />
          </div>
          <img
            src={
              this.props.enemyReducer.inCombatWith.name === "enemy1"
                ? blueenemy
                : greenenemy
            }
            alt=""
            style={{
              width: "92px",
              height: "92px"
            }}
          />
          <div className="abilities">
            {this.props.enemyReducer.inCombatWith.abilities.map(ability => {
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  handleEnemyDamage: damage => dispatch(handleEnemyDamage(damage)),
  handlePlayerDamage: damage => dispatch(handlePlayerDamage(damage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CombatScreen);
