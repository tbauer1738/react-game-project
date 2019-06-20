let initialState = {
  name: "",
  toon: null,
  health: "100%",
  xp: 0,
  abilities: [
    {
      name: "Punch",
      damage: 20
    },
    {
      name: "Kick",
      damage: 30
    },
    {
      name: "Block",
      damage: 0
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
    default:
      return state;
  }
};