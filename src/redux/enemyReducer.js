let initialState = {
  inCombat: false,
  inCombatWith: "",
  enemies: {
    enemy1: {
      name: "enemy1",
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
      name: "enemy2",
      position: [92, 46, 2],
      health: 100,
      xpWorth: 50,
      abilities: [
        {
          name: "Smack",
          damage: 30
        },
        {
          name: "Struggle",
          damage: 0
        },
        {
          name: "Punch",
          damage: 35
        }
      ]
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_ENEMY_DAMAGE":
      switch (state.inCombatWith.name) {
        case "enemy1":
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
        case "enemy2":
          if (action.payload >= state.enemies.enemy2.health) {
            return {
              ...state,
              inCombat: false,
              enemies: {
                ...state.enemies,
                enemy2: {
                  ...state.enemies.enemy2,
                  health: 0
                }
              }
            };
          } else {
            return {
              ...state,
              enemies: {
                ...state.enemies,
                enemy2: {
                  ...state.enemies.enemy2,
                  health: state.enemies.enemy2.health - action.payload
                }
              }
            };
          }
        default:
          return;
      }

    case "HANDLE_GO_TO_COMBAT":
      switch (action.payload) {
        case "enemy1":
          return {
            ...state,
            inCombat: true,
            inCombatWith: state.enemies.enemy1
          };
        case "enemy2":
          return {
            ...state,
            inCombat: true,
            inCombatWith: state.enemies.enemy2
          };
        default:
          return;
      }

    default:
      return state;
  }
};
