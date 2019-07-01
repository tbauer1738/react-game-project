let initialState = {
  characterCreated: false,
  level: 1,
  chests: [
    {
      level: 2,
      position: [0, 0, 2],
      contents: {
        name: "Slash",
        damage: 50
      }
    },
    {
      level: 1,
      position: [0, 0, 1],
      contents: "Full Heal"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_CREATION_ACTION":
      return {
        ...state,
        characterCreated: action.payload.bool
      };
    case "HANDLE_NEXT_LEVEL":
      return {
        ...state,
        level: state.level + 1
      };

    default:
      return state;
  }
};
