import React from "react";
import deathmessage from "../assets/generatedtext.png";

const refresh = () => {
  window.location.reload();
};

const DeathScreen = () => (
  <div className="App">
    <img
      src={deathmessage}
      alt="Oh Dear, Your're Dead!"
      className="deathmessage"
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div value="Refresh Page" onClick={e => refresh(e)} className="restartgame">
      Restart Game
    </div>
  </div>
);

export default DeathScreen;
