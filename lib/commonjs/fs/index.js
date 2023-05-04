"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDir_ = exports.isDirEmpty_ = exports.isDirEmpty = exports.isDir = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isDir = path => _fsExtra.default.lstatSync(path).isDirectory();
exports.isDir = isDir;
const isDir_ = async path => (await _fsExtra.default.lstat(path)).isDirectory();
exports.isDir_ = isDir_;
const isDirEmpty = path => _fsExtra.default.readdirSync(path).length === 0;
exports.isDirEmpty = isDirEmpty;
const isDirEmpty_ = async path => {
  const files = await _fsExtra.default.readdir(path);
  return files.length === 0;
};
exports.isDirEmpty_ = isDirEmpty_;
//# sourceMappingURL=index.js.map