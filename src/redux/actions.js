export const characterCreationAction = (bool, charName, sprite) => dispatch => {
  dispatch({
    type: "CHARACTER_CREATION_ACTION",
    payload: {
      bool,
      charName,
      sprite
    }
  });
};

export const handleEnemyDamage = damage => dispatch => {
  dispatch({
    type: "HANDLE_ENEMY_DAMAGE",
    payload: damage
  });
};

export const handlePlayerDamage = damage => dispatch => {
  dispatch({
    type: "PLAYER_DAMAGE_ACTION",
    payload: damage
  });
};

export const handleNextLevel = () => dispatch => {
  dispatch({
    type: "HANDLE_NEXT_LEVEL",
    payload: "next level pls"
  });
};

export const handleGoToCombat = () => dispatch => {
  dispatch({
    type: "HANDLE_GO_TO_COMBAT",
    payload: true
  });
};
