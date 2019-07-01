let initialState = {
  characterCreated: false,
  finalLevel: false,
  level: 1,
  chests: [
    {
      level: 1,
      position: [184, 184, 2],
      contents: "Full Heal"
    },
    {
      level: 2,
      position: [0, 0, 1],
      contents: "Full Heal"
    },
    {
      level: 3,
      position: [276, 92, 1],
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
      const nextLevel = action.payload;
      if (nextLevel === 3) {
        return {
          ...state,
          finalLevel: true,
          level: nextLevel
        };
      } else {
        return {
          ...state,
          level: nextLevel
        };
      }

    default:
      return state;
  }
};
