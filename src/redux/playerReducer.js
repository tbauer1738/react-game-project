let initialState = {
  name: "",
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
      return {
        ...state,
        foundChest: action.payload
      };

    default:
      return state;
  }
};
