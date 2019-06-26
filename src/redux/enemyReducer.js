let initialState = {
  inCombat: false,
  enemies: {
    enemy1: {
      position: [414, 138, 1],
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
    },
    enemy2: {
      position: [92, 46, 2],
      health: 100,
      xpWorth: 50,
      abilities: [
        {
          name: "Smack",
          damage: 20
        },
        {
          name: "Struggle",
          damage: 0
        },
        {
          name: "Punch",
          damage: 25
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
          inCombat: false,
          enemies: {
            ...state.enemies,
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
            ...state.enemies,
            enemy1: {
              ...state.enemies.enemy1,
              health: state.enemies.enemy1.health - action.payload
            }
          }
        };
      }
    case "HANDLE_GO_TO_COMBAT":
      return {
        ...state,
        inCombat: action.payload
      };
    default:
      return state;
  }
};
