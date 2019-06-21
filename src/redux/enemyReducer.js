let initialState = {
  enemies: {
    enemy1: {
      health: 100,
      xpWorth: 50,
      abilities: [
        {
          name: "Slap",
          damage: 10
        },
        {
          name: "Struggle",
          damage: 0
        },
        {
          name: "Struggle",
          damage: 0
        }
      ]
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_ENEMY_DAMAGE":
      return {
        ...state,
        health: state.enemies.enemy1.health - action.payload
      };
    default:
      return state;
  }
};
