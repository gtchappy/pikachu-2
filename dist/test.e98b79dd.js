// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n}\n.skin *::before,\n.skin *::after {\n    box-sizing: border-box;\n}\n\n.skin {\n    background: #ffe600;\n    min-height: 50vh;\n    position: relative;\n}\n.nose {\n    width: 0;\n    height: 25px;\n    position: relative;\n    top: 145px;\n    left: 50%;\n    transform: translate(-50%, 0);\n}\n.triangle {\n    border: 10px solid ;\n    border-color: #000000 transparent transparent transparent;\n    border-bottom: none;\n\n    width: 0;\n    height: 0;\n\n    position: absolute;\n    left: 50%;\n    top: 6px;\n    transform: translate(-50%, 0);\n    z-index: 2;\n}\n.triangle-shade {\n    width: 22px;\n    height: 20px;\n    display: block;\n    left: 50%;\n    transform: translate(-50%, 0);\n    position: absolute;\n    /* border: 1px solid blue; */\n    top: 6px;\n    background-color: #ffe600;\n    z-index: 1;\n}\n.arc {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: #000000;\n    /* top: 139px; */\n    left: 50%;\n    transform: translate(-50%, 0);\n    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;\n    z-index: -1;\n}\n.eye {\n    border: 2px solid rgb(0, 0, 0);\n    background: rgb(46, 46, 46);\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    transform: translate(-50%, 0);\n    margin-left: -32px;\n    border-radius: 50%;\n}\n.eye::before {\n    content: '';\n    display: block;\n    border: 3px solid rgb(0, 0, 0);\n    background: rgb(255, 255, 255);\n    width: 32px;\n    height: 32px;\n    position: absolute;\n    border-radius: 50%;\n    top: 2px;\n    left: 4px;\n}\n.eye.left {\n    transform: translateX(-120px);\n}\n\n.eye.right {\n    transform: translateX(120px);\n}\n.mouth {\n    /* border: 1px solid red; */\n    width: 200px;\n    height: 100px;\n    position: relative;\n    left: 50%;\n    top: 170px;\n    transform: translate(-50%, 0);\n}\n.mouth .up .lip {\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    border-radius: 0 0 0 50px;\n    position: relative;\n    background: #ffe600;\n}\n.mouth .up .lip::before {\n    content: '';\n    width: 102px;\n    height: 13px;\n    background-color: #ffe600;\n    display: block;\n    position: absolute;\n    left: -4px;\n    top: -5px;\n}\n.mouth .up .lip.left {\n    border-radius: 0 100% 69% 31% / 0 36% 64% 100%;\n    left: 2px;\n    transform: rotate(-7deg);\n}\n.mouth .up .lip.right {\n    border-radius: 100% 0 31% 69% / 36% 0 100% 64%;\n    transform: rotate(7deg);\n    top: -30px;\n    left: 98px;\n}\n.mouth .down {\n    position: absolute;\n    width: 100%;\n    height: 200px;\n    top: 8px;\n    overflow: hidden;\n}\n.mouth .down .yuan1 {\n    border: 2px solid rgb(0, 0, 0);\n    background: #9b000a;\n    height: 280px;\n    position: absolute;\n    top: -90px;\n    left: 50%;\n    transform: translate(-50%, 0);\n    border-radius: 0 0 50% 50% / 0 0 100% 90%;\n    width: 165px;\n    z-index: -3;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n    width: 165px;\n    height: 280px;\n    transform: translate(-50%, 0);\n    border-radius: 50% 50% 50% 0 / 23% 24% 0 0;\n    position: absolute;\n    background: #ff485f;\n    top: 115px;\n    left: 50%;\n}\n.face {\n    border: 3px solid black;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    width: 88px;\n    height: 88px;\n    top: 220px;\n    border-radius: 50%;\n    background: #ff0000;\n    z-index: 2;\n}\n.face.left {\n    transform: translateX(-210px);\n}\n.face.right {\n    transform: translateX(120px);\n}\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    33% {\n        transform: rotate(10deg);\n    }\n\n    66% {\n        transform: rotate(-10deg);\n    }\n\n    100% {\n        transform: rotate(0deg);\n    }\n\n}\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave 0.25s infinite;\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 模块化
// let string =` .skin * {
//     box-sizing: border-box;
// margin: 0;
// padding: 0;
//
// }
// .skin *::before,
// .skin *::after {
//     box-sizing: border-box;
// }
//
// .skin {
//     background: #ffe600;
//     min-height: 50vh;
//     position: relative;
// }
// .nose {
//     width: 0;
//     height: 25px;
//     position: relative;
//     top: 145px;
//     left: 50%;
//     transform: translate(-50%, 0);
// }
// .triangle {
//     border: 10px solid ;
//     border-color: #000000 transparent transparent transparent;
//     border-bottom: none;
//
//     width: 0;
//     height: 0;
//
//     position: absolute;
//     left: 50%;
//     top: 6px;
//     transform: translate(-50%, 0);
//     z-index: 2;
// }
// .triangle-shade {
//     width: 22px;
//     height: 20px;
//     display: block;
//     left: 50%;
//     transform: translate(-50%, 0);
//     position: absolute;
//     /* border: 1px solid blue; */
//     top: 6px;
//     background-color: #ffe600;
//     z-index: 1;
// }
// .arc {
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     background-color: #000000;
//     /* top: 139px; */
//     left: 50%;
//     transform: translate(-50%, 0);
//     border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
//     z-index: -1;
// }
// .eye {
//     border: 2px solid rgb(0, 0, 0);
//     background: rgb(46, 46, 46);
//     width: 64px;
//     height: 64px;
//     position: absolute;
//     left: 50%;
//     top: 100px;
//     transform: translate(-50%, 0);
//     margin-left: -32px;
//     border-radius: 50%;
// }
// .eye::before {
//     content: '';
//     display: block;
//     border: 3px solid rgb(0, 0, 0);
//     background: rgb(255, 255, 255);
//     width: 32px;
//     height: 32px;
//     position: absolute;
//     border-radius: 50%;
//     top: 2px;
//     left: 4px;
// }
// .eye.left {
//     transform: translateX(-120px);
// }
//
// .eye.right {
//     transform: translateX(120px);
// }
// .mouth {
//     /* border: 1px solid red; */
//     width: 200px;
//     height: 100px;
//     position: relative;
//     left: 50%;
//     top: 170px;
//     transform: translate(-50%, 0);
// }
// .mouth .up .lip {
//     border: 3px solid black;
//     height: 30px;
//     width: 100px;
//     border-radius: 0 0 0 50px;
//     position: relative;
//     background: #ffe600;
// }
// .mouth .up .lip::before {
//     content: '';
//     width: 102px;
//     height: 13px;
//     background-color: #ffe600;
//     display: block;
//     position: absolute;
//     left: -4px;
//     top: -5px;
// }
// .mouth .up .lip.left {
//     border-radius: 0 100% 69% 31% / 0 36% 64% 100%;
//     left: 2px;
//     transform: rotate(-7deg);
// }
// .mouth .up .lip.right {
//     border-radius: 100% 0 31% 69% / 36% 0 100% 64%;
//     transform: rotate(7deg);
//     top: -30px;
//     left: 98px;
// }
// .mouth .down {
//     position: absolute;
//     width: 100%;
//     height: 200px;
//     top: 8px;
//     overflow: hidden;
// }
// .mouth .down .yuan1 {
//     border: 2px solid rgb(0, 0, 0);
//     background: #9b000a;
//     height: 280px;
//     position: absolute;
//     top: -90px;
//     left: 50%;
//     transform: translate(-50%, 0);
//     border-radius: 0 0 50% 50% / 0 0 100% 90%;
//     width: 165px;
//     z-index: -3;
//     overflow: hidden;
// }
// .mouth .down .yuan1 .yuan2 {
//     width: 165px;
//     height: 280px;
//     transform: translate(-50%, 0);
//     border-radius: 50% 50% 50% 0 / 23% 24% 0 0;
//     position: absolute;
//     background: #ff485f;
//     top: 115px;
//     left: 50%;
// }
// .face {
//     border: 3px solid black;
//     position: absolute;
//     left: 50%;
//     transform: translate(-50%, 0);
//     width: 88px;
//     height: 88px;
//     top: 220px;
//     border-radius: 50%;
//     background: #ff0000;
//     z-index: 2;
// }
// .face.left {
//     transform: translateX(-210px);
// }
// .face.right {
//     transform: translateX(120px);
// }
// @keyframes wave {
//     0% {
//         transform: rotate(0deg);
// }
//
//     33% {
//         transform: rotate(10deg);
// }
//
//     66% {
//         transform: rotate(-10deg);
// }
//
//     100% {
//         transform: rotate(0deg);
// }
//
// }
// .nose:hover {
//     transform-origin: center bottom;
//     animation: wave 0.25s infinite;
// }`
var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var player = {
  id: undefined,
  time: 0,
  n: 1,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'fastSpeed',
    '#btnSlow': 'slowSpeed',
    '#btnNormal': 'normalSpeed',
    '#final': 'finalResult'
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id); // 代表不要再继续执行下面的console.log了

      return;
    }

    console.log(player.n + ':' + _css.default.substring(0, player.n));
    demo.innerText = _css.default.substring(0, player.n);
    demo2.innerHTML = _css.default.substring(0, player.n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      // 检查这个key是不是自身的属性(防御性编程)
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slowSpeed: function slowSpeed() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normalSpeed: function normalSpeed() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fastSpeed: function fastSpeed() {
    player.pause();
    player.time = 0;
    player.play();
  },
  finalResult: function finalResult() {
    player.pause();
    demo.innerText = '';
    demo.innerText = _css.default;
    demo2.innerHTML = '';
    demo2.innerHTML = _css.default;
  }
};
player.play();
},{"./css.js":"css.js"}],"C:/Users/gtc/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52655" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/gtc/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map