import React from "react";
import { connect } from "react-redux";
import { handleNewAbility } from "../redux/actions";
import { resetXP } from "../redux/actions";

class LevelUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rewardsL2: [
        {
          name: "Slash",
          damage: 50
        },
        {
          name: "Chop",
          damage: 35
        }
      ],
      rewardsL3: [
        {
          name: "Slash",
          damage: 50
        },
        {
          name: "Chop",
          damage: 35
        }
      ]
    };
  }

  handleSelectedAbility = (name, damage) => {
    this.props.handleNewAbility(name, damage);
    this.props.resetXP();
  };

  render() {
    switch (this.props.playerReducer.playerLevel) {
      case 1:
        return (
          <div className="App">
            <div>Level Up!</div>
            <div>Would you like an new Ability?</div>
            {this.state.rewardsL2.map(reward => {
              return (
                <div
                  onClick={() =>
                    this.handleSelectedAbility(reward.name, reward.damage)
                  }
                >
                  {reward.name} which does {reward.damage} damage
                </div>
              );
            })}
          </div>
        );
      case 2:
        return (
          <div className="App">
            <div>
              You've vanquished all the evil in this dungeon... for now...
            </div>
          </div>
        );

      default:
        return;
    }
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  handleNewAbility: (name, damage) => dispatch(handleNewAbility(name, damage)),
  resetXP: () => dispatch(resetXP())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelUpScreen);
