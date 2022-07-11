/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/Platform.png":
/*!*****************************!*\
  !*** ./assets/Platform.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e9ae81ab9b31660dfcb77c0c577c2fe8.png");

/***/ }),

/***/ "./assets/background0.png":
/*!********************************!*\
  !*** ./assets/background0.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f4783d5d6fd770797e31809fa444daf.png");

/***/ }),

/***/ "./assets/background1.png":
/*!********************************!*\
  !*** ./assets/background1.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd0f5596d05688a16b78c4708c623100.png");

/***/ }),

/***/ "./assets/background2.png":
/*!********************************!*\
  !*** ./assets/background2.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82f51a723af0848064805d046c9cca42.png");

/***/ }),

/***/ "./assets/background3.png":
/*!********************************!*\
  !*** ./assets/background3.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "69f0701d304389715bf111e21359bed7.png");

/***/ }),

/***/ "./assets/background4.png":
/*!********************************!*\
  !*** ./assets/background4.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5b87bf8c6b9f26e53fe55fb756f77886.png");

/***/ }),

/***/ "./assets/idleleft.png":
/*!*****************************!*\
  !*** ./assets/idleleft.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c8b5f6b74b767755f1bb7ed5ddf7e088.png");

/***/ }),

/***/ "./assets/idleright.png":
/*!******************************!*\
  !*** ./assets/idleright.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5bfd862f2536972f72650149e94c5e52.png");

/***/ }),

/***/ "./assets/platformislandbig.png":
/*!**************************************!*\
  !*** ./assets/platformislandbig.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0ffe3b8e64c46cfb06ae44101a401763.png");

/***/ }),

/***/ "./assets/runningleft.png":
/*!********************************!*\
  !*** ./assets/runningleft.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "815ce50ab444cba159cb6e7efb4909e2.png");

/***/ }),

/***/ "./assets/runningright.png":
/*!*********************************!*\
  !*** ./assets/runningright.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4f7dfc907551aa0de21be40efa9369b8.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/platformislandbig.png */ "./assets/platformislandbig.png");
/* harmony import */ var _assets_Platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/Platform.png */ "./assets/Platform.png");
/* harmony import */ var _assets_background0_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/background0.png */ "./assets/background0.png");
/* harmony import */ var _assets_background1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/background1.png */ "./assets/background1.png");
/* harmony import */ var _assets_background2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/background2.png */ "./assets/background2.png");
/* harmony import */ var _assets_background3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/background3.png */ "./assets/background3.png");
/* harmony import */ var _assets_background4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/background4.png */ "./assets/background4.png");
/* harmony import */ var _assets_idleleft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/idleleft.png */ "./assets/idleleft.png");
/* harmony import */ var _assets_idleright_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/idleright.png */ "./assets/idleright.png");
/* harmony import */ var _assets_runningleft_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/runningleft.png */ "./assets/runningleft.png");
/* harmony import */ var _assets_runningright_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/runningright.png */ "./assets/runningright.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.9; //values can be changed. the lower the number the slower (more moon walk) will it be

var friction = 0.90; //the closer to 1, the more slippery stuff will be.

var scrollOffset = 0;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 45;
    this.height = 80;
    this.speed = 10;
    this.image = createImage(_assets_idleright_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_assets_idleright_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: createImage(_assets_idleleft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropStart: 30,
        cropEnd: 50
      },
      run: {
        right: createImage(_assets_runningright_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
        left: createImage(_assets_runningleft_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        cropStart: 0,
        cropEnd: 50
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropStart = this.sprites.stand.cropStart;
    this.currentCropEnd = this.sprites.stand.cropEnd;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'blue'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.currentSprite, this.currentCropStart + 80 * this.frames, 0, this.currentCropEnd, 74, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; // this.velocity.x *= friction

      if (this.frames > 35) this.frames = 0; // console.log(this.frames)

      this.draw();

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } // else { this.velocity.y = 0 }

    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y); // c.fillStyle = 'blue'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }]);

  return Platform;
}();

var GenericObj = /*#__PURE__*/function () {
  function GenericObj(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObj);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObj, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObj;
}();

var platforms = [];
var GenericObjs = [];
var keys = {
  //key down has a weird bump, it fires one time than only after a set amount of time fires rapidly. 
  right: {
    //it created a small stop before starting to move continusly. so instead of using key down to fire, i use it and keyup to flag here.
    pressed: false
  },
  left: {
    pressed: false
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  GenericObjs.forEach(function (GenericObj) {
    GenericObj.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });

  if (keys.right.pressed && player.position.x < canvas.width - 500) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 350 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x *= friction; //just realised that by using friction the v value will never 

    if (Math.abs(player.velocity.x) <= 0.3) {
      //reach true 0, and that will probably makes some stuff harder down the line
      player.velocity.x = 0; //so added safe guard, just to be sure, maybe will need fixing later.
    }

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      GenericObjs.forEach(function (platform) {
        platform.position.x -= player.speed * .66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      GenericObjs.forEach(function (platform) {
        platform.position.x += player.speed * .66;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height - 20 <= platform.position.y && player.position.y + player.height + player.velocity.y - 20 >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //win condition

  if (scrollOffset > 4200) {
    alert('you won!');
    init();
  } //lose condition


  if (player.position.y > canvas.height) {
    console.log('you lose');
    init();
  }

  player.update();
}

function init() {
  platforms = [new Platform({
    x: 200,
    y: 100,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 1000,
    y: 400,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 1750,
    y: 500,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 400,
    y: 300,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: -50,
    y: 500,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 2250,
    y: 300,
    image: createImage(_assets_Platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 2050,
    y: 450,
    image: createImage(_assets_Platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 2050,
    y: 150,
    image: createImage(_assets_Platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 2350,
    y: 80,
    image: createImage(_assets_Platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 2950,
    y: 250,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 3150,
    y: 400,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 3550,
    y: 400,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 3950,
    y: 400,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 4650,
    y: 200,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 4350,
    y: 400,
    image: createImage(_assets_platformislandbig_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 3700,
    y: 300,
    image: createImage(_assets_Platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Platform({
    x: 4300,
    y: 300,
    image: createImage(_assets_Platform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  GenericObjs = [new GenericObj({
    x: -300,
    y: 0,
    image: createImage(_assets_background0_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObj({
    x: -300,
    y: 100,
    image: createImage(_assets_background4_png__WEBPACK_IMPORTED_MODULE_6__["default"])
  }), new GenericObj({
    x: -300,
    y: 0,
    image: createImage(_assets_background3_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new GenericObj({
    x: -300,
    y: 0,
    image: createImage(_assets_background2_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new GenericObj({
    x: -300,
    y: 350,
    image: createImage(_assets_background1_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  })];
  player = new Player();
  scrollOffset = 0;
} //opted to use keydown and keyup as flags instead of basic fire, lets hope it works


window.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 87:
    case 38:
      {
        if (Math.abs(player.velocity.y) > 1) {
          console.log('no jump');
          break;
        } else {
          player.velocity.y -= 20;
          console.log('jump!');
          break;
        }
      }

    case 83:
    case 40:
      {
        console.log('down');
        break;
      }

    case 68:
    case 39:
      {
        console.log('right');
        keys.right.pressed = true;
        player.currentSprite = player.sprites.run.right;
        player.currentCropStart = player.sprites.run.cropStart;
        player.currentCropEnd = player.sprites.run.cropEnd;
        break;
      }

    case 65:
    case 37:
      {
        console.log('left');
        keys.left.pressed = true;
        player.currentSprite = player.sprites.run.left;
        player.currentCropStart = player.sprites.run.cropStart;
        player.currentCropEnd = player.sprites.run.cropEnd;
        break;
      }

    case 32:
      {
        console.log('spacebar');
        break;
      }
  }
});
window.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 87:
    case 38:
      {
        console.log('up up');
        break;
      }

    case 83:
    case 40:
      {
        console.log('down up');
        break;
      }

    case 68:
    case 39:
      {
        console.log('right up');
        keys.right.pressed = false;
        player.currentSprite = player.sprites.stand.right;
        player.currentCropStart = player.sprites.stand.cropStart;
        player.currentCropEnd = player.sprites.stand.cropEnd;
        break;
      }

    case 65:
    case 37:
      {
        console.log('left up');
        keys.left.pressed = false;
        player.currentSprite = player.sprites.stand.left;
        player.currentCropStart = player.sprites.stand.cropStart;
        player.currentCropEnd = player.sprites.stand.cropEnd;
        break;
      }

    case 32:
      {
        console.log('spacebar up');
        break;
      }
  }
});

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var player = new Player();
init();
animate();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map