/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main-script */ \"./src/js/modules/main-script.js\");\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_main_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_rotateNickname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/rotateNickname */ \"./src/js/modules/rotateNickname.js\");\n/* harmony import */ var _modules_rotateNickname__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_rotateNickname__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_directNickname__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/directNickname */ \"./src/js/modules/directNickname.js\");\n/* harmony import */ var _modules_directNickname__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_directNickname__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_changeNicknameColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/changeNicknameColor */ \"./src/js/modules/changeNicknameColor.js\");\n/* harmony import */ var _modules_changeNicknameColor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_changeNicknameColor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_changeNickname__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changeNickname */ \"./src/js/modules/changeNickname.js\");\n/* harmony import */ var _modules_changeNickname__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_changeNickname__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_changeBgColorAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changeBgColorAvatar */ \"./src/js/modules/changeBgColorAvatar.js\");\n/* harmony import */ var _modules_changeBgColorAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_changeBgColorAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_countBuyIns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/countBuyIns */ \"./src/js/modules/countBuyIns.js\");\n/* harmony import */ var _modules_countBuyIns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_countBuyIns__WEBPACK_IMPORTED_MODULE_6__);\n// import './modules/lang';\n// import './modules/theme';\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?\n}");

/***/ }),

/***/ "./src/js/modules/changeBgColorAvatar.js":
/*!***********************************************!*\
  !*** ./src/js/modules/changeBgColorAvatar.js ***!
  \***********************************************/
/***/ (function() {

eval("{const changeBgInput = document.getElementById('change-input');\nconst photoHero = document.getElementById('photo-hero');\nconst changeBorderColorInput = document.getElementById('change-input-border');\nconst removeBorderBtn = document.getElementById('remove-border');\n\nlet backgroundColorValueAvatar = localStorage.getItem(\n  'background-color-avatar'\n);\n\nlet borderColorValueAvatar = localStorage.getItem('border-color-avatar');\n\nlet boxShadowValueAvatar = localStorage.getItem('box-shadow-avatar');\n\nconst changeBgColorAvatarForStart = function () {\n\n  if (backgroundColorValueAvatar === null || backgroundColorValueAvatar === '') {\n    photoHero.style.backgroundColor = '#fff';\n  } else {\n    photoHero.style.backgroundColor = backgroundColorValueAvatar;\n  }\n\n}\n\nchangeBgColorAvatarForStart();\n\nconst changeBgColorAvatar = function () {\n\n  photoHero.style.backgroundColor = this.value;\n\n  localStorage.setItem('background-color-avatar', this.value);\n\n}\n\nconst changeBorderColorAvatarForStart = function () {\n\n  if (borderColorValueAvatar === null || borderColorValueAvatar === '') {\n    photoHero.style.borderColor = '';\n  } else {\n    photoHero.style.borderColor = borderColorValueAvatar;\n  }\n\n}\n\nchangeBorderColorAvatarForStart();\n\nconst changeBoxShadowAvatarForStart = function () {\n  if (boxShadowValueAvatar === null || boxShadowValueAvatar === '') {\n    photoHero.style.boxShadow = '';\n  } else {\n    photoHero.style.boxShadow = `${boxShadowValueAvatar}`;\n  }\n};\n\nchangeBoxShadowAvatarForStart();\n\nconst changBorderColorAvatar = function () {\n  photoHero.style.borderColor = this.value;\n\n  photoHero.style.boxShadow = `0 0 15px ${this.value}`;\n\n  // ================================\n\n  borderColorValueAvatar = this.value;\n\n  localStorage.setItem('border-color-avatar', borderColorValueAvatar);\n\n  // ===============================\n\n  boxShadowValueAvatar = `0 0 15px ${this.value}`;\n\n  localStorage.setItem('box-shadow-avatar', boxShadowValueAvatar);\n};\n\n\n\nconst removeBorder = function () {\n  photoHero.style.borderColor = 'transparent';\n  photoHero.style.boxShadow = '';\n\nlocalStorage.setItem('border-color-avatar', '');\nlocalStorage.setItem('box-shadow-avatar', '');\n};\n\nchangeBgInput.addEventListener('input', changeBgColorAvatar);\n\nchangeBorderColorInput.addEventListener('input', changBorderColorAvatar);\n\nremoveBorderBtn.addEventListener('click', removeBorder);\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/changeBgColorAvatar.js?\n}");

/***/ }),

/***/ "./src/js/modules/changeNickname.js":
/*!******************************************!*\
  !*** ./src/js/modules/changeNickname.js ***!
  \******************************************/
/***/ (function() {

eval("{const nicknameInput = document.getElementById('hero-nickname');\nconst heroNicknameText = document.getElementById('hero-nickname-text');\nconst nicknameValue = localStorage.getItem('nickname-text');\nconst nicknameValueTextInput = localStorage.getItem('nickname-text');\n\nnicknameInput.value = nicknameValueTextInput;\n\n\nconst changeNicknameForStart = function () {\n  if (nicknameValue === null || nicknameValue === '') {\n    heroNicknameText.value = 'Your nickname';\n  } else {\n    heroNicknameText.value = nicknameValue;\n  }\n};\n\nchangeNicknameForStart();\n\nconst changeNickname = function () {\n  heroNicknameText.value = this.value;\n  localStorage.setItem('nickname-text', this.value);\n};\n\nnicknameInput.addEventListener('input', changeNickname);\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/changeNickname.js?\n}");

/***/ }),

/***/ "./src/js/modules/changeNicknameColor.js":
/*!***********************************************!*\
  !*** ./src/js/modules/changeNicknameColor.js ***!
  \***********************************************/
/***/ (function() {

eval("{const nicknameColorInput = document.getElementById('nickname-color');\nconst heroNicknameText = document.getElementById('hero-nickname-text');\n\nlet nicknameColor = localStorage.getItem('nickname-color')\n\n\nconst changeNicknameColorForStart = function () {\n  if (nicknameColor === null || nicknameColor === '') {\n    heroNicknameText.style.color = '#2b2b2b';\n  } else {\n    heroNicknameText.style.color = nicknameColor;\n  }\n}\n\nchangeNicknameColorForStart();\n\n\nconst changeNicknameColor = function () {\n  heroNicknameText.style.color = this.value;\n  nicknameColor = localStorage.setItem('nickname-color', this.value);\n}\n\nnicknameColorInput.addEventListener('input', changeNicknameColor);\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/changeNicknameColor.js?\n}");

/***/ }),

/***/ "./src/js/modules/countBuyIns.js":
/*!***************************************!*\
  !*** ./src/js/modules/countBuyIns.js ***!
  \***************************************/
/***/ (function() {

eval("{const quontutyBuyInValueEl = document.getElementById('entry-value-buy-in');\nconst inputEl = document.getElementById('input');\nconst entryValueEl = document.getElementById('entry-value');\n\nlet currentInputValue = +localStorage.getItem('input-value');\nconst startBuyIn = 0.1;\n\nif (currentInputValue === 0) {\n  currentInputValue = 0;\n}\n\nconst countBuyins = function () {\n  let entryValue = +entryValueEl.textContent;\n\n  if (entryValue) {\n    let currentAmountBuyin = Math.round(currentInputValue / entryValue);\n    quontutyBuyInValueEl.textContent = currentAmountBuyin;\n  } else {\n    quontutyBuyInValueEl.textContent = 0;\n  }\n\n  if (entryValue < startBuyIn) {\n  }\n};\n\ncountBuyins();\n\ninputEl.addEventListener('input', function () {\n  currentInputValue = this.value;\n  countBuyins();\n});\n\ninputEl.addEventListener('keydown', event => {\n  if (event.code === 'Enter') {\n    countBuyins();\n  }\n});\n\ninputEl.addEventListener('blur', () => {\n  countBuyins();\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/countBuyIns.js?\n}");

/***/ }),

/***/ "./src/js/modules/directNickname.js":
/*!******************************************!*\
  !*** ./src/js/modules/directNickname.js ***!
  \******************************************/
/***/ (function() {

eval("{const directBtns = document.querySelectorAll(\n  '.direction-nickname-controls button'\n);\nconst heroNicknameTextEl = document.getElementById('hero-nickname-text');\n\ndirectBtns.forEach(item => {\n  item.addEventListener('click', event => {\n    if (\n      event.target.closest('.direction-nickname-controls__btn').dataset\n        .direction === 'left'\n    ) {\n      heroNicknameTextEl.style.left =\n        parseInt(\n          heroNicknameTextEl.style.left ||\n            getComputedStyle(heroNicknameTextEl)['left'],\n          10\n        ) -\n        10 +\n        'px';\n    } else if (\n      event.target.closest('.direction-nickname-controls__btn').dataset\n        .direction === 'top'\n    ) {\n      heroNicknameTextEl.style.top =\n        parseInt(\n          heroNicknameTextEl.style.top ||\n            getComputedStyle(heroNicknameTextEl)['top'],\n          10\n        ) -\n        10 +\n        'px';\n    } else if (\n      event.target.closest('.direction-nickname-controls__btn').dataset\n        .direction === 'right'\n    ) {\n      heroNicknameTextEl.style.left =\n        parseInt(\n          heroNicknameTextEl.style.left ||\n            getComputedStyle(heroNicknameTextEl)['left'],\n          10\n        ) +\n        10 +\n        'px';\n    } else if (\n      event.target.closest('.direction-nickname-controls__btn').dataset\n        .direction === 'bottom'\n    ) {\n      heroNicknameTextEl.style.bottom =\n        parseInt(\n          heroNicknameTextEl.style.bottom ||\n            getComputedStyle(heroNicknameTextEl)['bottom'],\n          10\n        ) -\n        10 +\n        'px';\n    }\n  });\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/directNickname.js?\n}");

/***/ }),

/***/ "./src/js/modules/main-script.js":
/*!***************************************!*\
  !*** ./src/js/modules/main-script.js ***!
  \***************************************/
/***/ (function() {

eval("{//* ========== lazyload ==========\n\nvar lazyLoadInstance = new LazyLoad({\n  elements_selector: '.lazy',\n});\n\nconst bankrollInput = document.querySelector('.bankroll-app__input');\nconst levelUpValueEl = document.getElementById('level-up');\nconst heroNameEl = document.getElementById('heroName');\nconst photoHeroPictureIMG = document.getElementById('photoHeroPic');\nconst photoHeroPictureWEBP = document.querySelector(\n  '.hero-left-side__photo picture source'\n);\nconst entryValueEl = document.getElementById('entry-value');\nconst statusLevelTextElDecrease = document.querySelector(\n  '.side-bar__decrease-level'\n);\nconst statusLevelTextElIncrease = document.querySelector(\n  '.side-bar__increase-level'\n);\nconst boxCost = document.querySelector('.entry__box-cost');\nconst entryCashValue = document.getElementById('entry-value-cash');\nconst entryTextForbiddenTextEl = document.querySelector(\n  '.entry__cash-forbiden-text'\n);\nconst entryBoxCashCostEl = document.querySelector('.entry__cash-value-box');\nconst entryDescriptionTextCash = document.getElementById(\n  'entry-description-text-cash'\n);\nconst entryBuyinValueCash = document.getElementById('entry-value-buy-in-cash');\nconst entrySatValue = document.getElementById('entry-sat-value');\nconst entrySatTextForbidden = document.querySelector(\n  '.entry__sat-text-forbidden'\n);\nconst satBuyinValue = document.getElementById('entry-value-buy-in-sat');\nconst entryBoxCostSat = document.querySelector('.entry__box-cost-sat');\n\nconst rangsRus = [\n  'рыбка',\n  'крабик',\n  'малыш - морская звезда',\n  'маленькая медуза',\n  'морской конек',\n  'морской окунь',\n  'маленький осьминог',\n  'черепашка',\n  'паучок - скакун Багира',\n  'кустарниковая гадюка',\n  'игуан',\n  'синий дельфин',\n  'большой морж',\n  'снежный барс',\n  'кенгуренок',\n  'скат',\n  'креветка',\n  'пингвин',\n  'рыбка - клоун',\n  'утконос',\n  'тасманский дьявол',\n  'губка боб',\n  'патрик',\n  'сквидвард',\n  'рыбка - меч',\n  'акула - молот',\n  'касатка',\n  'чёрная пантера',\n  'лев',\n  'крокодил',\n  'белый волк',\n];\n\nconst heroPicturesSrc = [\n  'fish-changed',\n  'crab-changed',\n  'sea-star-changed',\n  'meduza-changed',\n  'sea-horse-changed',\n  'perch-changed',\n  'octopus-changed',\n  'turtle-changed',\n  'spider-changed',\n  'snake-changed',\n  'iguana-changed',\n  'dolphin-changed',\n  'warlus-changed',\n  'snow-bars-changed',\n  'kangaroo-changed',\n  'stingray-changed',\n  'shrimp-changed',\n  'pingvin-changed',\n  'clown-changed',\n  'platypus-changed',\n  'tasmanian-devil-changed',\n  'sponge-bob-changed',\n  'patrik-changed',\n  'skwidward-changed',\n  'sword-fish-changed',\n  'shark-molot-changed',\n  'kasatka-changed',\n  'pantera-changed',\n  'lion-changed',\n  'crocodile-changed',\n  'wolf-changed',\n];\n\nconst bankrollScores = [\n  30, 75, 150, 300, 600, 900, 1200, 1500, 3000, 6000, 9000, 15000, 30000, 45000,\n  60000, 75000, 90000, 105000, 120000, 135000, 150000, 165000, 180000, 195000,\n  210000, 225000, 240000, 255000, 270000, 285000, 300000,\n];\n\nconst bankrollScoresCash = [\n  1000, 2500, 5000, 12500, 25000, 50000, 100000, 250000, 500000,\n];\n\nconst bankrollNLLimits = [2, 5, 10, 25, 50, 100, 200, 500, 1000];\n\nconst satellitesCost = [0.25, 1, 2, 3, 5, 10, 25, 50, 100, 200, 500, 1000];\n\nconst bankrollSatArr = [\n  125, 500, 1000, 1500, 2500, 5000, 12500, 25000, 50000, 100000, 250000, 500000,\n];\n\nlet currentLevel = localStorage.getItem('currentLevel');\n\nconst startLevelBuyin = 0.1;\n\nlet currentStartBankroll;\n\nconst maxLevel = 31;\n\n// set level up value\n\nlet currentLevelUp = 1;\n\nlet currentInputValue = 0;\n\nbankrollInput.addEventListener('input', function () {\n  let currentValue = +this.value;\n  localStorage.setItem('input-value', currentValue);\n  currentInputValue = +localStorage.getItem('input-value');\n  if (this.value < 0) {\n    this.value = 0;\n  }\n});\n\nif (currentInputValue === 0) {\n  bankrollInput.value = 0;\n}\n\ncurrentInputValue = +localStorage.getItem('input-value');\n\nbankrollInput.value = currentInputValue;\n\nconst setLevelUp = function () {\n  let currentBankrollValue = currentInputValue;\n\n  const reccomendBankroll = bankrollScores.find((item, index) => {\n    if (item >= currentBankrollValue) {\n      currentLevelUp = index;\n      localStorage.setItem('currentLevel', +currentLevelUp);\n      if (index === 0) {\n        currentLevelUp = 1;\n        localStorage.setItem('currentLevel', 1);\n      }\n      return item;\n    } else {\n      currentLevelUp = maxLevel;\n      localStorage.setItem('currentLevel', +maxLevel);\n    }\n  });\n\n  const currentBankrollEntry = bankrollScores[currentLevelUp - 1] / 300;\n\n  if (\n    currentBankrollValue < 0 ||\n    currentBankrollValue < startLevelBuyin ||\n    currentBankrollValue == ''\n  ) {\n    entryValueEl.textContent = 'не хватает';\n    boxCost.style.color = '#d63838';\n  } else {\n    entryValueEl.textContent = currentBankrollEntry.toFixed(2);\n    boxCost.style.color = '#94da25';\n  }\n\n  levelUpValueEl.textContent = currentLevelUp;\n\n  localStorage.setItem('currentLevelUp', currentLevelUp);\n};\n\nsetLevelUp();\n\nconst changeStatusTextLevel = function () {\n  if (currentLevelUp > currentLevel) {\n    statusLevelTextElIncrease.classList.add('side-bar__status-level-up');\n    statusLevelTextElDecrease.classList.remove('side-bar__status-level-down');\n    setTimeout(() => {\n      statusLevelTextElIncrease.classList.remove('side-bar__status-level-up');\n    }, 10000);\n  } else if (\n    currentLevelUp < currentLevel &&\n    currentInputValue > startLevelBuyin\n  ) {\n    statusLevelTextElDecrease.classList.add('side-bar__status-level-down');\n    statusLevelTextElIncrease.classList.remove('side-bar__status-level-up');\n    setTimeout(() => {\n      statusLevelTextElDecrease.classList.remove('side-bar__status-level-down');\n    }, 10000);\n  }\n};\n\nconst updateCurrentLevel = function () {\n  currentLevel = localStorage.getItem('currentLevelUp');\n};\n\nconst setLevelName = function () {\n  for (let i = 0; i < rangsRus.length; i++) {\n    if (currentLevelUp === i) {\n      heroNameEl.textContent = rangsRus[i - 1];\n    }\n    if (currentLevelUp === maxLevel) {\n      heroNameEl.textContent = rangsRus[i];\n    }\n  }\n};\n\nsetLevelName();\n\nconst setHeroPicture = function () {\n  for (let i = 1; i <= rangsRus.length; i++) {\n    if (currentLevelUp === i) {\n      photoHeroPictureIMG.src = './img/' + heroPicturesSrc[i - 1] + '.png';\n    }\n  }\n};\n\nsetHeroPicture();\n\n// let currentCashLimit = +localStorage.getItem('current-cash-limit');\n\nconst setLimitCash = function () {\n  let currentLimitCashBankroll = 0;\n  for (let i = 0; i < bankrollNLLimits.length; i++) {\n    if (currentInputValue >= bankrollScoresCash[i]) {\n      currentLimitCashBankroll = bankrollScoresCash[i];\n    }\n  }\n\n  let currentLimitNL = currentLimitCashBankroll / 500;\n\n  if (currentLimitCashBankroll === 0) {\n    entryBoxCashCostEl.classList.add('entry__cash-value-box--forbidden');\n    entryTextForbiddenTextEl.classList.add('entry__cash-forbiden-text--active');\n    entryDescriptionTextCash.classList.add(\n      'entry__description-text--forbidden'\n    );\n    entryCashValue.textContent = 2;\n    entryBuyinValueCash.textContent = Math.floor(currentInputValue / 2);\n  } else {\n    entryBoxCashCostEl.classList.remove('entry__cash-value-box--forbidden');\n    entryTextForbiddenTextEl.classList.remove(\n      'entry__cash-forbiden-text--active'\n    );\n    entryDescriptionTextCash.classList.remove(\n      'entry__description-text--forbidden'\n    );\n    entryCashValue.textContent = currentLimitNL;\n    entryBuyinValueCash.textContent = Math.floor(\n      currentInputValue / currentLimitNL\n    );\n  }\n};\n\nsetLimitCash();\n\nconst setSatellitesValue = function () {\n  let currentBankrollBuyin = 0;\n  let minBuyin = 0.25;\n\n  for (let i = 0; i < bankrollSatArr.length; i++) {\n    if (currentInputValue >= bankrollSatArr[i]) {\n      currentBankrollBuyin = bankrollSatArr[i];\n    }\n  }\n\n  let currentLimitSatBuyin = currentBankrollBuyin / 500;\n\n  if (currentBankrollBuyin === 0) {\n    entrySatTextForbidden.classList.add('entry__sat-text-forbidden--active');\n\n    satBuyinValue.classList.add('entry__description-text--forbidden');\n\n    satBuyinValue.textContent = Math.floor(currentInputValue / minBuyin);\n\n    entryBoxCostSat.style.color = '#d63838';\n\n    entrySatValue.textContent = minBuyin;\n  } else {\n    entrySatTextForbidden.classList.remove('entry__sat-text-forbidden--active');\n\n    satBuyinValue.classList.remove('entry__description-text--forbidden');\n\n    entryBoxCostSat.style.color = '#94da25';\n\n    satBuyinValue.textContent = Math.floor(\n      currentInputValue / currentLimitSatBuyin\n    );\n\n    entrySatValue.textContent = currentLimitSatBuyin;\n  }\n};\n\nsetSatellitesValue();\n\n// currentInputValue;\n\n// Создание массива с доступными сателитами\n\n//============================\n\n// let satOpens = [];\n\n// const setArrayAvailableSat = function () {\n//   for (let i = 0; i < sattelitesCost.length; i++) {\n//     if (currentInputValue >= sattelitesCost[i] * 1000) {\n//       satOpens[i] = sattelitesCost[i];\n//     }\n//   }\n// };\n\n// const setLimitCashGames = function () {\n//   const currentLimit = bankrollScoresCash.find((item, index) => {\n\n//   });\n// };\n\n// setArrayAvailableSat();\n\n//============================\n\nbankrollInput.addEventListener('keydown', event => {\n  if (event.code === 'Enter') {\n    setLevelUp();\n    setLevelName();\n    setHeroPicture();\n    changeStatusTextLevel();\n    updateCurrentLevel();\n    setLimitCash();\n    setSatellitesValue();\n  }\n});\n\nbankrollInput.addEventListener('blur', () => {\n  setLevelUp();\n  setLevelName();\n  setHeroPicture();\n  changeStatusTextLevel();\n  updateCurrentLevel();\n  setLimitCash();\n  setSatellitesValue();\n});\n\n//  Входные данные:\n// значение текущего банкролла,\n// пройтись по массиву со значениями стоимости входа в сателит\n// если банкролл больше item*1000, тогда сохранять значение item в массиве satOpens, иначе удалять это значение\n// выводить текст: Открыта возможность играть в Sattelites с входом: function displaySattelites\n\n// el.textContent = `Открыта возможность играть в Sattelites с входом: ${displaySattelites()}`\n//\n\n// 1 currentInputValue;\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/main-script.js?\n}");

/***/ }),

/***/ "./src/js/modules/rotateNickname.js":
/*!******************************************!*\
  !*** ./src/js/modules/rotateNickname.js ***!
  \******************************************/
/***/ (function() {

eval("{const rotateLeftBtn = document.getElementById('rotate-left-btn');\nconst rotateRightBtn = document.getElementById('rotate-right-btn');\nconst heroNicknameTextEl = document.getElementById('hero-nickname-text');\nlet rotateValue = -20;\n\nconst rotateNicknameLeft = function () {\n  rotateValue -=  5;\n  heroNicknameTextEl.style.transform = `rotate(${rotateValue}deg)`;\n}\n\nconst rotateNicknameRight = function () {\n  rotateValue += 5;\n  heroNicknameTextEl.style.transform = `rotate(${rotateValue}deg)`;\n};\n\n\nrotateLeftBtn.addEventListener('click', rotateNicknameLeft)\nrotateRightBtn.addEventListener('click', rotateNicknameRight);\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/rotateNickname.js?\n}");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;