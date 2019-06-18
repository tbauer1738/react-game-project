let initialState = {
  characterCreated: true,
  level: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_CREATION_ACTION":
      return {
        ...state,
        characterCreated: action.payload.bool
      };

    default:
      return state;
  }
};
