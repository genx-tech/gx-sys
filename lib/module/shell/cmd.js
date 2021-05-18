"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSync = exports.runLive_ = exports.run_ = void 0;

var _child_process = _interopRequireDefault(require("child_process"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Execute a shell command.
 * @alias cmd.run_
 * @param {string} cmd - Command line to execute
 * @param {object} options
 * @returns {Promise.<Object>}
 */
const run_ = (cmd, options) => new Promise((resolve, reject) => _child_process.default.exec(cmd, {
  windowsHide: true,
  ...options
}, (error, stdout, stderr) => {
  if (error) {
    return reject(error);
  }

  let result = {
    stdout,
    stderr
  };
  return resolve(result);
}));
/**
 * Execute a shell command and lively output
 * @alias cmd.runLive_
 * @param {string} cmd - Command line to execute
 * @param {Array} [args] - Arguments list
 * @returns {Promise.<Object>}
 */


exports.run_ = run_;

const runLive_ = (cmd, args, onStdOut, onStdErr, options) => new Promise((resolve, reject) => {
  let ps = _child_process.default.spawn(cmd, args, {
    windowsHide: true,
    ...options
  });

  let e;

  if (onStdOut) {
    ps.stdout.on('data', onStdOut);
  }

  if (onStdErr) {
    ps.stderr.on('data', onStdErr);
  }

  ps.on('close', code => e ? reject(e) : resolve(code));
  ps.on('error', error => {
    e = error;
  });
});
/**
 * Execute a shell command synchronously
 * @alias cmd.runSync
 * @param {string} cmd - Command line to execute
 * @returns {string}
 */


exports.runLive_ = runLive_;

const runSync = (cmd, options) => _child_process.default.execSync(cmd, {
  windowsHide: true,
  ...options
}).toString();

exports.runSync = runSync;
//# sourceMappingURL=cmd.js.map