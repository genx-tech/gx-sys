"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDir_ = exports.isDir = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isDir = path => _fsExtra.default.lstatSync(path).isDirectory();
exports.isDir = isDir;
const isDir_ = async path => (await _fsExtra.default.lstat(path)).isDirectory();
exports.isDir_ = isDir_;
//# sourceMappingURL=index.js.map