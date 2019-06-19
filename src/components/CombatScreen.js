import React from "react";
import { connect } from "react-redux";
import toon from "../assets/actual_toon.png";
import toon2 from "../assets/toon2.png";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class CombatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {" "}
        <img
          src={this.props.playerReducer.toon === "toon" ? toon : toon2}
          alt=""
          style={{
            width: "46px",
            height: "46px"
          }}
        />
        <div className="abilities">Abilities will go here</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CombatScreen);
