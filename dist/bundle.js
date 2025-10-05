/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/characters.js":
/*!***************************!*\
  !*** ./src/characters.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bowman: () => (/* binding */ Bowman),
/* harmony export */   Characters: () => (/* binding */ Characters),
/* harmony export */   Daemon: () => (/* binding */ Daemon),
/* harmony export */   Magician: () => (/* binding */ Magician),
/* harmony export */   Swordsman: () => (/* binding */ Swordsman),
/* harmony export */   Undead: () => (/* binding */ Undead),
/* harmony export */   Zombie: () => (/* binding */ Zombie)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

/**
 * Класс Characters представляет игрового персонажа с базовыми характеристиками.
 *
 * @class
 */
var Characters = /*#__PURE__*/_createClass(
/**
 * Создаёт экземпляр персонажа.
 * @param {string} name - Имя персонажа, от 2 до 10 символов.
 * @param {string} type - Тип персонажа. Один из: "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie".
 * @param {number} attack - Сила атаки персонажа.
 * @param {number} defence - Уровень защиты персонажа.
 * @throws {Error} Если имя или тип не соответствуют ограничениям.
 */
function Characters(name, type, attack, defence) {
  _classCallCheck(this, Characters);
  if (typeof name !== "string" || name.length < 2 || name.length > 10) {
    throw new Error("Имя должно быть строкой длиной от 2 до 10 символов");
  }
  var normalizedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  if (!validTypes.includes(normalizedType)) {
    throw new Error("Неверный тип персонажа");
  }
  this.name = name;
  this.type = normalizedType;
  this.health = 100;
  this.level = 1;
  this.attack = attack;
  this.defence = defence;
});
/**
 * Класс Bowman представляет тип персонажа Лучник.
 * @extends Characters
 */
var Bowman = /*#__PURE__*/function (_Characters) {
  /**
   * Создаёт экземпляр лучника.
   * @param {string} name - Имя персонажа.
   */
  function Bowman(name) {
    _classCallCheck(this, Bowman);
    return _callSuper(this, Bowman, [name, "Bowman", 25, 25]);
  }
  _inherits(Bowman, _Characters);
  return _createClass(Bowman);
}(Characters);
/**
 * Класс Swordsman представляет тип персонажа Мечник.
 * @extends Characters
 */
var Swordsman = /*#__PURE__*/function (_Characters2) {
  /**
   * Создаёт экземпляр мечника.
   * @param {string} name - Имя персонажа.
   */
  function Swordsman(name) {
    _classCallCheck(this, Swordsman);
    return _callSuper(this, Swordsman, [name, "Swordsman", 40, 10]);
  }
  _inherits(Swordsman, _Characters2);
  return _createClass(Swordsman);
}(Characters);
/**
 * Класс Magician представляет тип персонажа Волшебник.
 * @extends Characters
 */
var Magician = /*#__PURE__*/function (_Characters3) {
  /**
   * Создаёт экземпляр волшебника.
   * @param {string} name - Имя персонажа.
   */
  function Magician(name) {
    _classCallCheck(this, Magician);
    return _callSuper(this, Magician, [name, "Magician", 10, 40]);
  }
  _inherits(Magician, _Characters3);
  return _createClass(Magician);
}(Characters);
/**
 * Класс Daemon представляет тип персонажа Демон.
 * @extends Characters
 */
var Daemon = /*#__PURE__*/function (_Characters4) {
  /**
   * Создаёт экземпляр демона.
   * @param {string} name - Имя персонажа.
   */
  function Daemon(name) {
    _classCallCheck(this, Daemon);
    return _callSuper(this, Daemon, [name, "Daemon", 10, 40]);
  }
  _inherits(Daemon, _Characters4);
  return _createClass(Daemon);
}(Characters);
/**
 * Класс Zombie представляет тип персонажа Зомби.
 * @extends Characters
 */
var Zombie = /*#__PURE__*/function (_Characters5) {
  /**
   * Создаёт экземпляр зомби.
   * @param {string} name - Имя персонажа.
   */
  function Zombie(name) {
    _classCallCheck(this, Zombie);
    return _callSuper(this, Zombie, [name, "Zombie", 40, 10]);
  }
  _inherits(Zombie, _Characters5);
  return _createClass(Zombie);
}(Characters);
/**
 * Класс Undead представляет тип персонажа Нежить.
 * @extends Characters
 */
var Undead = /*#__PURE__*/function (_Characters6) {
  /**
   * Создаёт экземпляр нежити.
   * @param {string} name - Имя персонажа.
   */
  function Undead(name) {
    _classCallCheck(this, Undead);
    return _callSuper(this, Undead, [name, "Undead", 25, 25]);
  }
  _inherits(Undead, _Characters6);
  return _createClass(Undead);
}(Characters);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _characters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters.js */ "./src/characters.js");

var bowman = new _characters_js__WEBPACK_IMPORTED_MODULE_0__.Bowman('Robin');
console.log(bowman);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map