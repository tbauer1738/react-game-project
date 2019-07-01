let initialState = {
  characterCreated: true,
  level: 1,
  chests: [
    {
      level: 1,
      position: [184, 184, 2],
      contents: 
        "Full Heal"

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
      return {
        ...state,
        level: action.payload
      };
    
    default:
      return state;
  }
};
