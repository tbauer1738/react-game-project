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
