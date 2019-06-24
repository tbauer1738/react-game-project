webpackHotUpdate("main",{

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! exports provided: characterCreationAction, handleEnemyDamage, handlePlayerDamage, handleNextLevel, handleGoToCombat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterCreationAction", function() { return characterCreationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleEnemyDamage", function() { return handleEnemyDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePlayerDamage", function() { return handlePlayerDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNextLevel", function() { return handleNextLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGoToCombat", function() { return handleGoToCombat; });
const characterCreationAction = (bool, charName, sprite) => dispatch => {
  dispatch({
    type: "CHARACTER_CREATION_ACTION",
    payload: {
      bool,
      charName,
      sprite
    }
  });
};
const handleEnemyDamage = damage => dispatch => {
  dispatch({
    type: "HANDLE_ENEMY_DAMAGE",
    payload: damage
  });
};
const handlePlayerDamage = damage => dispatch => {
  dispatch({
    type: "PLAYER_DAMAGE_ACTION",
    payload: damage
  });
};
const handleNextLevel = () => dispatch => {
  dispatch({
    type: "HANDLE_NEXT_LEVEL",
    payload: "next level pls"
  });
};
const handleGoToCombat = () => dispatch => {
  dispatch({
    type: "HANDLE_GO_TO_COMBAT",
    payload: false
  });
};

/***/ })

})
//# sourceMappingURL=main.7c5b9df25b9956bc7904.hot-update.js.map