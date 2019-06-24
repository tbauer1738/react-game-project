(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./assets/tile_70x70.png */ "./src/assets/tile_70x70.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./assets/border.png */ "./src/assets/border.png"));

// Module
exports.push([module.i, ".App {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.combatScreen {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n.board {\n  position: relative;\n  border: 15px solid transparent;\n  border-image: url(" + ___CSS_LOADER_URL___1___ + ") 16;\n  border-image-repeat: round;\n}\n\ndiv.board {\n  position: absolute;\n}\n\n.abilities {\n  padding: 10px;\n  background-color: white;\n  color: black;\n  border: white;\n  border-radius: 5px;\n}\n\n.combatFrameLeft {\n  /* display: flex; */\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 70px;\n}\n.combatFrameLeft > img {\n  display: block;\n  margin: auto;\n}\n\n.combatFrameRight {\n  /* display: flex; */\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 70px;\n}\n\n.combatFrameRight > img {\n  display: block;\n  margin: auto;\n}\n\n.abilities > div:hover {\n  color: red;\n  cursor: pointer;\n}\n\n#playerHealthBar {\n  background-color: black;\n  border-radius: 13px; /* (height of inner div) / 2 + padding */\n  padding: 3px;\n  margin-bottom: 15px;\n}\n\n#playerHealthBar > div {\n  background-color: green;\n\n  height: 10px;\n  border-radius: 10px;\n}\n\n#enemyHealthBar {\n  background-color: black;\n  border-radius: 13px; /* (height of inner div) / 2 + padding */\n  padding: 3px;\n  margin-bottom: 15px;\n}\n\n#enemyHealthBar > div {\n  background-color: red;\n\n  height: 10px;\n  border-radius: 10px;\n}\n\n.combatLog {\n  max-height: 15em;\n  overflow: scroll;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/constants */ "./src/helpers/constants.js");
/* harmony import */ var _components_CharacterCreation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CharacterCreation */ "./src/components/CharacterCreation.js");
/* harmony import */ var _components_Level1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Level1 */ "./src/components/Level1.js");

var _jsxFileName = "/Users/ttjb2/Desktop/react-game-project/src/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = e => {
      let newDirection;

      switch (e.keyCode) {
        case 37:
          newDirection = {
            top: 0,
            left: -46,
            dir: _helpers_constants__WEBPACK_IMPORTED_MODULE_4__["LEFT"]
          };
          break;

        case 38:
          newDirection = {
            top: -46,
            left: 0,
            dir: _helpers_constants__WEBPACK_IMPORTED_MODULE_4__["UP"]
          };
          break;

        case 39:
          newDirection = {
            top: 0,
            left: 46,
            dir: _helpers_constants__WEBPACK_IMPORTED_MODULE_4__["RIGHT"]
          };
          break;

        case 40:
          newDirection = {
            top: 46,
            left: 0,
            dir: _helpers_constants__WEBPACK_IMPORTED_MODULE_4__["DOWN"]
          };
          break;

        default:
          return;
      }

      this.handlePlayerMovement(newDirection);
    };

    this.handlePlayerMovement = dirObj => {
      if (this.state.player.position[1] <= 0 & dirObj.top < 0) {
        return;
      } else if (this.state.player.position[1] >= 276 & dirObj.top > 0) {
        return;
      } else if (this.state.player.position[0] <= 0 & dirObj.left < 0) {
        return;
      } else if (this.state.player.position[0] >= 552 & dirObj.left > 0) {
        return;
      } else {
        this.setState({
          player: {
            position: [this.state.player.position[0] + dirObj.left, this.state.player.position[1] + dirObj.top]
          }
        });
      }
    };

    this.state = {
      player: {
        position: [0, 0]
      }
    };
  }

  componentDidMount() {
    window.onkeydown = this.handleKeyDown;
  }

  render() {
    if (this.props.characterCreated === false) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CharacterCreation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    } else {
      switch (this.props.level) {
        case 1:
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Level1__WEBPACK_IMPORTED_MODULE_6__["default"], {
            playerPosition: this.state.player.position,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          });

        default:
          return;
      }
    }
  }

}

const mapStateToProps = state => Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.gameReducer);

const mapDispatchToProps = dispatch => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/assets/actual_toon.png":
/*!************************************!*\
  !*** ./src/assets/actual_toon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAJnKAACZygHjkaQiAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACWElEQVRIDe2TPWgTYRjH/3eeeD0JJOmkgigabUIV60d1iGMnRxexIILFQQQd3cRdijqIFAcRKy4dHBwk4GKG0mqitSSFCIpQ2iVNIJhGjD3f/3N9r5fkDDc4OPjA3b3v8/F7Pt73gP8SMgEjRNdXdfXSuLsrMYD0aFb8ynN5rNTWMfV0uofVo+hHDoLTmSEPXlrCnxJY/WBhNvddAaufF4CL18S8+vwh3HobOJDucY9U+e0bEy4jCa6YbTSaGziRPSOw9/lZxBwTqQ0Lxsnjortz/7FwI8EZce/cqCQoDabQ+PIJtx5MoaxG8vLRJGL7jyBTrQj45qs5nxl5LGuq9WTcAg8zU7Uxc90by+m4jZrSoQrQJyiR4QySBGre/FbMncJJ1b8juakLgrn24S+mn0jbb17nQq9Vrm5hLN72EqgODh08LKxEAEyfoMh8PhZn3YkrXps0jgynOxIw8bPJu6i2HElAH46IokdB8KDdlIPWB2oyMAhmQHGxDN5prmlnNxQG6+oI7QaLk3rp22VdGL8s1WsYwfOFgqEe8eUPooWVewkcrZIvddrGv5WHTukckqiA4cyQO2A7WG81MZPL4/xYFg11l2NOS3mY6tmCMYT3nLZGk7stCYUvlpb8u6o7+rpmY1+S8E4hWAur3602rJ5iMJij6BZ9qCNHz8rs7V8/xIUjoOgxyGZzz3Vr2w5RFRfeGv68gwm6wXu216R1RvHXJ1hDdFLadOLlnwluIXBWd+rYXlHwNf/hm7/mIgjQhjB4t83QbWvD3/r6Y4kCjFoEoVF4/7bPb7+PE4twOBGdAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/blue_enemy.png":
/*!***********************************!*\
  !*** ./src/assets/blue_enemy.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAJnKAACZygHjkaQiAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAB3ElEQVQ4EY2UTStEYRTHz71RZsZLNjI2ylsUU2YmSaxETSSxmlKKj4CVtaWPYKGUraKslGIhGSOmyGs2ro2XyYyxmFz3fziP597u1Jyae57nnP/53fO83DGohA2vbNqh5jBn848W7S0njRJSMv0SAHjjfjHRMH1mcMSO12XpJFtHVmKOPu6fqKalSTTsJebXUQUUAIQaQhSnLG3/laKoXGPI63vR0ecJXorNZ8vF+G4Mq5wr4UwYcmMWqf2dCB4GQO5hh8fyqKZxAsjPeGM/Pr8ZAA8DYCAeo0BVkH8Ye6E6jCE7qYwBADySKE5nLpUOY8RKmeuIJzb2+Whrp5eo8PWpajBGDNY/tmj3RCddV0BdoPFYt12YWlab53fE+mbnrVu6ON3ien70za/ardfrdNcxy2+D2LuJOoBFzkNABgCJ6t/1W28FOquMKpCIdY/CULiNQ3hRIX3wf+0B0E06Ea/nAEJculMbG64P6DrXWAdJFwAABjOP1xaM3VwXpQ6P1FKEICKZ615y2FyzNzLkOi4RSquY62PJw1cUX3jKy4GoJqhW5iryAqQDHcZHjG46nS/5oXZU5fzEKukM0EX6/OD/niCZHIrYV87/STkmxaJlkkzgS+0Rct5ixGA/4RfVZyqRD0gAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/border.png":
/*!*******************************!*\
  !*** ./src/assets/border.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABcCAYAAAD50zLWAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAJnKAACZygHjkaQiAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAEUElEQVR4Ae2dzWoUQRSFZ4beZGFQFHGTpSgIig+g4Atk797Hcu8+LyDoA4iCoLjMRkRR4iLLmNOT03Or6t6aLmc1qdOQVNX96aS+VNU9nZCZ5eLyOn756uLw6A6643V2+nNsTz9/XRw9erCwPjjkX/M5efN6uQK8kdbVJ8KJbPKv4YEP2A0E5YGhD638G3Dkgp254sBrb9y+5ZlHG7Z3zR8mXjn2PZ/H2rQC7YT/fP8xDW1/Ml52CI/+m/fuWvfUp38yXHX2Md+b4/Lp42fjGcgJYX7v3p4s8wlrvFg8f3F8YSFiFQ6osvaKVoyNUX9NAHWhegYKVEkgX2DFGWiXaJkuCwgA4t9fv0cYA/bxNokibBsCXGBsxy3MkrwJU28OAXDTGTiHlBPDRTcC1BZ2CDkmblvrWuXw8ipjg9XfECA3beENk+YeIA54JsVln0Sa79RJAnZnvo31JNL4w+cRN+nAxvzuw7kC2a5YjkGGdLunNBPApAMtxJm53YeRWVKFuSy7p9MAQEK6AZYNnXQgO9ap/jwC0oHzOCVRuRYsdGASrYFLABClA100240stGwTHbg9XRGWgHSgpdHYd3Vg4z26C+e2tRMvdKAe5yyeuE/5V/xCNU6RJycgHZgT2TLONSDCCx2oLVynSD7SgXVOoZeFhG2iA0k3zJYjISAdmOBoG7g6kMuy7VZ9Rxc6sG8c82cvHTifVRgpHRiiiR25Fix0YJwqDwkAonQgaTS2LLRsEx3YeK/uw6UDd1gCrg7c4X5dpHLb2skWOlCPcxZP3JcOjNnM9kgHzka1Dsw1IKyFDtQWrlMlH+nAOqfQy0LCNtGBpBtmy5EQkA5McLQNXB3IZdl2q76jCx3YN4767Fk4ECUdWGflevN/BZEOdDHVjbkWLHRgPb1vL7YwViEgcjsX/3DdN6L67AGPhZZtogPr6fLmBKQDcyINY1cHNuR3Gcptaydf6EA9zlk8cV86MGYz2yMdOBvVOjDXgLAWOlBbuE6VfKgDJWPqvEIvNCE+RiGNksxDMcyQYxLRFsVYha3BK9XWr35KYNDKS4G0jLBz9aodLcRMLJ9EVIUNlP/pFlVYZ+A8jDz6iiIyL11RIACIArjjWlAVbgDIpxCm4GnEfRVfBtg2Pxvzm9lYr3/d8vmaY8v8peA5eQLKJ04/WsRE/h7yATE8AyMwFiAfqK2N/R7yMdfpj0oUhjCyRAMQQXh+xPLy/D3kjyvQTh5ANN68Ncg2HuMK5Irjaspb+ct3cgCj8/Oz+AzMIWrsE5jOQLi3VU76/Vv1mT94UKzN9j1wnt/abP+65X/59nEZyhhM9sOn99W3xejdD0bJFoYhv2paL4/1xtc9f7juE/R+qNa26/yrWxhfCKXauyJ7HhvFRfZ9yx8wkYODw/z7TsDVJtt7/ngG1gAVZB1Dz/lbtzBKtcNsEdnz2Cgusu9b/gjn4f0nybsbYhJzJ4jYnvP/ASBMShz3SleyAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/door.png":
/*!*****************************!*\
  !*** ./src/assets/door.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAJnKAACZygHjkaQiAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABMklEQVQ4EY2TzUrDUBCFxxh/GlAshdCF4M4n0Ndw79631a0L3RW7kEKIVDC2G8037QmT9BYdyJ3J/J577r0Hd/cPP7aVj/eFXUxLQy/mM7ldl5dX3T85yOvTo+Wdd2u8Pb9Y0yxtfHzSC9FwNDq3s8nY/eQhma/twlQkVYyfhsQQ5WJn/MjBlDh5cvplfBJiw611CJSEjkXyp3zEkg1UNNSxibjYIbFer6xeH7a10rSJdr9t9lnVPQ/7FA/77FiQO7OVdcdDcAO1CFwULapVrHObY/03BxFN7OQcCEUMDG0RCD+6ieR4A92wZr50qH+RqHsDf74F3TA6Rqj7bPJEfn59c7vzeFIkxi1QzFBqc8FhG0JSfRcMMem+vTkNXie1uaB4RbsclVOZSc1D5j3AF0N/AdI6lu6Z/mUvAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/tile_70x70.png":
/*!***********************************!*\
  !*** ./src/assets/tile_70x70.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAJnKAACZygHjkaQiAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACI0lEQVR4Ae2bQU7DMBBF26pbJBASYsUB2LNF4gLcngXrbhACgeAA0Kn603Tq3yROIjvOj1Q5nsQTz+sfN2Opy8en579FJsfl7c1uJt9v79EzGsKHPXwVPYMRB/5+fkV5BxQbDB9mw3kXp8nB1CduSrHPxfVVlxhO7t28vFY+Yv0tc0qlkwgTGpIrJmHsZx8tMASPwAgMIUDMUozAEALELMUIDCFAzFJMSWCsjLh7uF+gNqqXFSTOzubJKuZn81EFG1sPVQ4CJ5MFg1hiKmeMPdeuz13M9ZopBEffShx+fDt5xVhAtsZgvfEBxvaLAIPgh0yrSaYSQKBFag2ZVkUpBqCGaAWGUBQYgSEEiFmKERhCgJilGIEhBIhZiokFM8ZeB5lLUrOvtxoVM8ZeR1ICDQ9HvVVErdQQa6vLvt5aeQm18jKDm6pUgoRmEHOrENdeQq1GzeCmSjEziLVTiAJDcAmMA4P3NoFxYPDeJjAODLoCsyWB9AEUawVmCwHpIzB1AuR8pxiVBad0jlJJZcEB0K66VllwAIKzI8XAqFa/SlQDUkwAjf0YCUwAjK252tp0YEwtdkgxDgy6UgxI7Fu8ugQVEyqq3Pjiu0EwoaKqeBIuwCAYd88suwJDvnaBERhCgJilGIEhBIhZiskNTM7bqVlU17lupyarlVCTDPnHCJIVUWatMQSbwMwFzBCLuqV5EYoJwei7qCdbfImCe5nrMPou6v+94ngObyseXgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/toon2.png":
/*!******************************!*\
  !*** ./src/assets/toon2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAJnKAACZygHjkaQiAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABzElEQVRIDdVUvUoDQRDeyAlqKglW8QGSEJREBRFsREnlEwiWNqIgeY40llYiBHwFEWwEEdQcSkjyAEklwcof8OD0m+M7du/2vLPMFDez8/Pt7Hezq9SkSu4/ja/V636tWjZK3G5fPXQ6VhzHyLQsDvb3/LOLdo7AW40dVa6UJLPfG7DCxwbMpTMVHIkERpeQm6tr0fjA9/n1oQDMOIPW4zAIXa2U/NmZOd0VswGOHOhubxBihkasIuJA98PRKOINloXCvAHKpCkaWfRisah2G9thKmz4kiQT53qxzuvd45MeitmZaAEl4JMyHr8ZJ6AfmptjelJp4aSgkD8WHEMwlocnR6JhQ/R7kIkWFqKrjdUVRTow75h1jCY7toJfts99/XJwllHUap2qZvNYOsOaJyCwBCwfoeXZvTeAkcduYQOY3aEz8M9OEU8SoWW5ti5Xl0koBAgBAAwqSAk75+lYF9Uh53g/9KDn5X2l8uICMACpeSP1fJttANaWNn8B4/LtvRrOaWdB1o7zLlo/pf4EhJ0nAQPAcYK3RZ91oHIN+mgHGwevpdG5tKF9sGFS10yzxd2XW8H9ExwASScieFQTGP5UcBanbaKDsmZy9Q8sK9lMWC0vMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/CharacterCreation.js":
/*!*********************************************!*\
  !*** ./src/components/CharacterCreation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/actual_toon.png */ "./src/assets/actual_toon.png");
/* harmony import */ var _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_toon2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/toon2.png */ "./src/assets/toon2.png");
/* harmony import */ var _assets_toon2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_toon2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions.js");

var _jsxFileName = "/Users/ttjb2/Desktop/react-game-project/src/components/CharacterCreation.js";






const mapStateToProps = state => Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

const mapDispatchToProps = dispatch => ({
  characterCreation: (bool, charName, sprite) => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["characterCreationAction"])(bool, charName, sprite))
});

class CharacterCreation extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.handleCharacterCreation = e => {
      this.props.characterCreation(true, this.state.name, this.state.sprite);
    };

    this.handleCharName = e => {
      this.setState({
        name: e.target.value
      });
    };

    this.handleSpriteSelection = e => {
      this.setState({
        sprite: e.target.value
      });
    };

    this.state = {
      name: "",
      sprite: "",
      toon: ""
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Character Creator"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      placeholder: "Your Character Name",
      onKeyUp: e => this.handleCharName(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      style: {
        width: "46px",
        height: "46px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "button",
      value: "toon",
      onClick: e => this.handleSpriteSelection(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _assets_toon2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      style: {
        width: "46px",
        height: "46px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "button",
      value: "toon2",
      onClick: e => this.handleSpriteSelection(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "button",
      value: "Enter the Dungeon",
      onClick: e => this.handleCharacterCreation(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CharacterCreation));

/***/ }),

/***/ "./src/components/CombatScreen.js":
/*!****************************************!*\
  !*** ./src/components/CombatScreen.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/actual_toon.png */ "./src/assets/actual_toon.png");
/* harmony import */ var _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_toon2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/toon2.png */ "./src/assets/toon2.png");
/* harmony import */ var _assets_toon2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_toon2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/blue_enemy.png */ "./src/assets/blue_enemy.png");
/* harmony import */ var _assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions.js");

var _jsxFileName = "/Users/ttjb2/Desktop/react-game-project/src/components/CombatScreen.js";








class CombatScreen extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.handleEnemyAbility = () => {
      const randomAbility = this.props.enemyReducer.enemies.enemy1.abilities[Math.floor(Math.random() * 3)];
      console.log("randomAbility: ", randomAbility);

      if (randomAbility.damage >= this.props.playerReducer.health) {
        this.props.handlePlayerDamage(randomAbility.damage);
        console.log("Oh dear, you're dead!");
        this.setState({
          playersTurn: true,
          combatLogEnemy: [...this.state.combatLogEnemy, {
            name: randomAbility.name,
            damage: randomAbility.damage
          }]
        });
      } else {
        this.props.handlePlayerDamage(randomAbility.damage);
        this.setState({
          playersTurn: true,
          combatLogEnemy: [...this.state.combatLogEnemy, {
            name: randomAbility.name,
            damage: randomAbility.damage
          }]
        });
      }
    };

    this.handlePlayerAbility = (e, abilityName, abilityDamage) => {
      if (this.state.playersTurn === true) {
        if (this.props.enemyReducer.enemies.enemy1.health === 0) {
          console.log("dead");
        } else if (abilityDamage >= this.props.enemyReducer.enemies.enemy1.health) {
          this.props.handleEnemyDamage(abilityDamage);
          this.setState({
            combatLogPlayer: [...this.state.combatLogPlayer, {
              name: abilityName,
              damage: abilityDamage
            }]
          });
        } else {
          this.props.handleEnemyDamage(abilityDamage);
          this.setState({
            playersTurn: false,
            enemies: {
              enemy1: Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.enemyReducer.enemies.enemy1, {
                health: this.props.enemyReducer.enemies.enemy1.health - abilityDamage
              })
            },
            combatLogPlayer: [...this.state.combatLogPlayer, {
              name: abilityName,
              damage: abilityDamage
            }]
          }, this.handleEnemyAbility);
        }
      }
    };

    this.state = {
      playersTurn: true,
      combatLogPlayer: [],
      combatLogEnemy: []
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "combatScreen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "combatFrameLeft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "playerHealthBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: this.props.playerReducer.health + "%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: this.props.playerReducer.toon === "toon" ? _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_3___default.a : _assets_toon2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      style: {
        width: "92px",
        height: "92px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "abilities",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, this.props.playerReducer.abilities.map(ability => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        value: ability.name,
        onClick: e => this.handlePlayerAbility(e, ability.name, ability.damage),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, ability.name, "\xA0 \xA0 \xA0 \xA0", " ", ability.damage.toString(), "dmg ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }));
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "combatLog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, this.state.combatLogPlayer.map(action => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, this.props.playerReducer.name, " used ", action.name, " for\xA0", action.damage, " damage!");
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "combatLog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, this.state.combatLogEnemy.map(action => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Enemy used ", action.name, " for\xA0", action.damage, " damage!");
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "combatFrameRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "enemyHealthBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: this.props.enemyReducer.enemies.enemy1.health + "%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "",
      style: {
        width: "92px",
        height: "92px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "abilities",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, this.props.enemyReducer.enemies.enemy1.abilities.map(ability => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, ability.name, "\xA0 \xA0 \xA0 \xA0", " ", ability.damage.toString(), "dmg ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }));
    }))));
  }

}

const mapStateToProps = state => Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

const mapDispatchToProps = dispatch => ({
  handleEnemyDamage: damage => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["handleEnemyDamage"])(damage)),
  handlePlayerDamage: damage => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["handlePlayerDamage"])(damage))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CombatScreen));

/***/ }),

/***/ "./src/components/Level1.js":
/*!**********************************!*\
  !*** ./src/components/Level1.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/actual_toon.png */ "./src/assets/actual_toon.png");
/* harmony import */ var _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_toon2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/toon2.png */ "./src/assets/toon2.png");
/* harmony import */ var _assets_toon2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_toon2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_door_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/door.png */ "./src/assets/door.png");
/* harmony import */ var _assets_door_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_door_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/blue_enemy.png */ "./src/assets/blue_enemy.png");
/* harmony import */ var _assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CombatScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CombatScreen */ "./src/components/CombatScreen.js");

var _jsxFileName = "/Users/ttjb2/Desktop/react-game-project/src/components/Level1.js";








class Level1 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.doorDetection = () => {
      if (this.props.playerPosition[0] === 506 & this.props.playerPosition[1] === 138) {
        console.log("found the door");
      }
    };

    this.enemyCollision = () => {
      if (this.props.playerPosition[0] === this.props.enemies.enemy1.position[0] & this.props.playerPosition[1] === this.props.enemies.enemy1.position[1]) {
        this.setState(Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          inCombat: true
        }));
      }
    };

    this.state = {
      inCombat: false
    };
  }

  componentDidMount() {
    window.onkeyup = e => {
      this.doorDetection(e);
      this.enemyCollision(e);
    };
  }

  render() {
    if (this.props.inCombat === true) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CombatScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
        enemyDead: this.enemyDead,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "board",
        style: {
          width: "600px",
          height: "350px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: "absolute",
          top: this.props.playerPosition[1],
          left: this.props.playerPosition[0],
          width: "46px",
          height: "46px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.props.toon === "toon" ? _assets_actual_toon_png__WEBPACK_IMPORTED_MODULE_2___default.a : _assets_toon2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "toon",
        style: {
          width: "46px",
          height: "46px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: "absolute",
          top: 138,
          left: 506,
          width: "46px",
          height: "46px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _assets_door_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "a door",
        style: {
          width: "46px",
          height: "46px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), this.props.enemies.enemy1.health === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: "absolute",
          top: this.props.enemies.enemy1.position[1],
          left: this.props.enemies.enemy1.position[0],
          width: "46px",
          height: "46px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _assets_blue_enemy_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "an enemy",
        style: {
          width: "46px",
          height: "46px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))));
    }
  }

}

const mapStateToProps = state => Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.playerReducer, state.enemyReducer);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Level1));

/***/ }),

/***/ "./src/helpers/constants.js":
/*!**********************************!*\
  !*** ./src/helpers/constants.js ***!
  \**********************************/
/*! exports provided: UP, DOWN, LEFT, RIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
const UP = "UP";
const DOWN = "DOWN";
const LEFT = "LEFT";
const RIGHT = "RIGHT";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store.js");
var _jsxFileName = "/Users/ttjb2/Desktop/react-game-project/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

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

/***/ }),

/***/ "./src/redux/enemyReducer.js":
/*!***********************************!*\
  !*** ./src/redux/enemyReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");

let initialState = {
  inCombat: false,
  enemies: {
    enemy1: {
      position: [414, 138],
      health: 100,
      xpWorth: 50,
      abilities: [{
        name: "Slap",
        damage: 10
      }, {
        name: "Struggle",
        damage: 0
      }, {
        name: "Struggle",
        damage: 0
      }]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_ENEMY_DAMAGE":
      if (action.payload >= state.enemies.enemy1.health) {
        return Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          inCombat: false,
          enemies: {
            enemy1: Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.enemies.enemy1, {
              health: 0
            })
          }
        });
      } else {
        return Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          enemies: {
            enemy1: Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.enemies.enemy1, {
              health: state.enemies.enemy1.health - action.payload
            })
          }
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/gameReducer.js":
/*!**********************************!*\
  !*** ./src/redux/gameReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");

let initialState = {
  characterCreated: false,
  level: 1
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_CREATION_ACTION":
      return Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        characterCreated: action.payload.bool
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/playerReducer.js":
/*!************************************!*\
  !*** ./src/redux/playerReducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");

let initialState = {
  name: "",
  toon: null,
  health: 100,
  xp: 0,
  abilities: [{
    name: "Punch",
    damage: 20
  }, {
    name: "Kick",
    damage: 30
  }, {
    name: "Block",
    damage: 0
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_CREATION_ACTION":
      return Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        name: action.payload.charName,
        toon: action.payload.sprite
      });

    case "PLAYER_DAMAGE_ACTION":
      if (action.payload >= state.health) {
        return Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          health: 0
        });
      } else {
        return Object(_Users_ttjb2_Desktop_react_game_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          health: state.health - action.payload
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/rootReducer.js":
/*!**********************************!*\
  !*** ./src/redux/rootReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _playerReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerReducer */ "./src/redux/playerReducer.js");
/* harmony import */ var _gameReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameReducer */ "./src/redux/gameReducer.js");
/* harmony import */ var _enemyReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemyReducer */ "./src/redux/enemyReducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  playerReducer: _playerReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  gameReducer: _gameReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  enemyReducer: _enemyReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === "localhost" || // [::1] is the IPv6 localhost address.
window.location.hostname === "[::1]" || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log("New content is available and will be used when all " + "tabs for this page are closed. See https://bit.ly/CRA-PWA."); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log("Content is cached for offline use."); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error("Error during service worker registration:", error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get("content-type");

    if (response.status === 404 || contentType != null && contentType.indexOf("javascript") === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log("No internet connection found. App is running in offline mode.");
  });
}

function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_rootReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/rootReducer.js */ "./src/redux/rootReducer.js");



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_rootReducer_js__WEBPACK_IMPORTED_MODULE_2__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ttjb2/Desktop/react-game-project/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ttjb2/Desktop/react-game-project/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map