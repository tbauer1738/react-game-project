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
      if (action.payload >= state.enemies.enemy1.health) {
        return {
          ...state,
          enemies: {
            enemy1: {
              ...state.enemies.enemy1,
              health: 0
            }
          }
        };
      } else {
        return {
          ...state,
          enemies: {
            enemy1: {
              ...state.enemies.enemy1,
              health: state.enemies.enemy1.health - action.payload
            }
          }
        };
      }

    default:
      return state;
  }
};
