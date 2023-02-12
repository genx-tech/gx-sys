"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  fs: true,
  glob: true,
  tryRequire: true,
  cmd: true
};
exports.cmd = void 0;
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
Object.defineProperty(exports, "tryRequire", {
  enumerable: true,
  get: function () {
    return _tryRequire.default;
  }
});
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _globPromise = _interopRequireDefault(require("glob-promise"));
var _tryRequire = _interopRequireDefault(require("./helpers/tryRequire"));
var _fs = require("./fs");
Object.keys(_fs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _fs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fs[key];
    }
  });
});
var _cmd = _interopRequireWildcard(require("./shell/cmd"));
exports.cmd = _cmd;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map