
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

export const handleNextLevel = (level) => dispatch => {
  dispatch({
    type: "HANDLE_NEXT_LEVEL",
    payload: level
  });
};

export const handleGoToCombat = enemy => dispatch => {
  dispatch({
    type: "HANDLE_GO_TO_COMBAT",
    payload: enemy
  });
};

export const handlePlayerMovement = (left, top, level) => dispatch => {
  dispatch({
    type: "HANDLE_PLAYER_MOVEMENT",
    payload: { left, top, level }
  });
};

export const foundChest = (chest) => dispatch =>{
  dispatch({
    type: "FOUND_CHEST",
    payload: chest
  })
}

export const handleXPGain = (xp) => dispatch => {
  dispatch({
    type: "HANDLE_XP_GAIN",
    payload: xp
  })
}

export const handleNewAbility = (name, damage) => dispatch => {
  dispatch({
    type: "HANDLE_NEW_ABILITY"  ,
    payload: { name, damage }
  })
}

export const resetXP = () => dispatch => {
  dispatch({
    type: "RESET_XP",
    payload: 0
  })
}