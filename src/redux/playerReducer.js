let initialState = {
  name: "",
  playerLevel: 1,
  position: [0, 0, 1],
  toon: null,
  health: 100,
  xp: 0,
  foundChest: "",
  abilities: [
    {
      name: "Punch",
      damage: 20
    },
    {
      name: "Kick",
      damage: 30
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_CREATION_ACTION":
      return {
        ...state,
        name: action.payload.charName,
        toon: action.payload.sprite
      };
    case "PLAYER_DAMAGE_ACTION":
      if (action.payload >= state.health) {
        return {
          ...state,
          health: 0
        };
      } else {
        return {
          ...state,
          health: state.health - action.payload
        };
      }
    case "HANDLE_PLAYER_MOVEMENT":
      return {
        ...state,
        position: [
          action.payload.left,
          action.payload.top,
          action.payload.level
        ]
      };
    case "FOUND_CHEST":
      const amt = 100 - state.health;
      return {
        ...state,
        health: state.health + amt
      };
    case "HANDLE_XP_GAIN":
      return {
        ...state,
        xp: state.xp + action.payload
      }
    case "HANDLE_NEW_ABILITY":
      return {
        ...state,
        abilities: [...state.abilities, {
          name: action.payload.name,
          damage: action.payload.damage
        }]
      }
    case "RESET_XP":
      return {
        ...state,
        xp: action.payload,
        level: state.playerLevel + 1
      }
    default:
      return state;
  }
};
