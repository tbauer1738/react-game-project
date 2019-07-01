import React from "react";
import { connect } from "react-redux";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";
import { characterCreationAction } from "../redux/actions";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  characterCreation: (bool, charName, sprite) =>
    dispatch(characterCreationAction(bool, charName, sprite))
});

class CharacterCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sprite: "",
      toon: ""
    };
  }

  handleCharacterCreation = e => {
    this.props.characterCreation(true, this.state.name, this.state.sprite);
  };

  handleCharName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSpriteSelection = e => {
    this.setState({
      sprite: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <div>Character Creator</div>
        <br />
        <input
          type="text"
          placeholder="Your Character Name"
          onKeyUp={e => this.handleCharName(e)}
        />
        <img
          src={toon}
          alt=""
          style={{
            width: "46px",
            height: "46px"
          }}
        />
        <input
          type="button"
          value="Avatar 1"
          onClick={e => this.handleSpriteSelection(e)}
        />
        <img
          src={toon2}
          alt=""
          style={{
            width: "46px",
            height: "46px"
          }}
        />
        <input
          type="button"
          value="Avatar 2"
          onClick={e => this.handleSpriteSelection(e)}
        />
        <br />
        <input
          type="button"
          value="Enter the Dungeon"
          onClick={e => this.handleCharacterCreation(e)}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCreation);
