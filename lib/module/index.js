"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fs", {
  enumerable: true,
  get: function () {
    return _fsExtra.default;
  }
});
Object.defineProperty(exports, "glob", {
  enumerable: true,
  get: function () {
    return _globPromise.default;
  }
});
Object.defineProperty(exports, "load_", {
  enumerable: true,
  get: function () {
    return _load_.default;
  }
});
Object.defineProperty(exports, "tryRequire", {
  enumerable: true,
  get: function () {
    return _tryRequire.default;
  }
});
exports.cmd = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _globPromise = _interopRequireDefault(require("glob-promise"));

var _load_ = _interopRequireDefault(require("./vm/load_"));

var _tryRequire = _interopRequireDefault(require("./helpers/tryRequire"));

var _cmd = _interopRequireWildcard(require("./shell/cmd"));

exports.cmd = _cmd;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map