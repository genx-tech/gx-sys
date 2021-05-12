"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSync = exports.runLive_ = exports.run_ = void 0;

var _child_process = _interopRequireDefault(require("child_process"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Execute a shell command.
 * @param {string} cmd - Command line to execute
 * @param {object} options
 * @returns {Promise.<Object>}
 */
var run_ = function run_(cmd, options) {
  return new Promise(function (resolve, reject) {
    return _child_process.default.exec(cmd, _objectSpread({
      windowsHide: true
    }, options), function (error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      var result = {
        stdout: stdout,
        stderr: stderr
      };
      return resolve(result);
    });
  });
};
/**
 * Execute a shell command and lively output
 * @param {string} cmd - Command line to execute
 * @param {Array} [args] - Arguments list
 * @returns {Promise.<Object>}
 */


exports.run_ = run_;

var runLive_ = function runLive_(cmd, args, onStdOut, onStdErr, options) {
  return new Promise(function (resolve, reject) {
    var ps = _child_process.default.spawn(cmd, args, _objectSpread({
      windowsHide: true
    }, options));

    var e;

    if (onStdOut) {
      ps.stdout.on('data', onStdOut);
    }

    if (onStdErr) {
      ps.stderr.on('data', onStdErr);
    }

    ps.on('close', function (code) {
      return e ? reject(e) : resolve(code);
    });
    ps.on('error', function (error) {
      e = error;
    });
  });
};
/**
 * Execute a shell command synchronously
 * @param {string} cmd - Command line to execute
 * @returns {string}
 */


exports.runLive_ = runLive_;

var runSync = function runSync(cmd, options) {
  return _child_process.default.execSync(cmd, _objectSpread({
    windowsHide: true
  }, options)).toString();
};

exports.runSync = runSync;
//# sourceMappingURL=cmd.js.map