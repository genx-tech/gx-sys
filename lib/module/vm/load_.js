"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _systemjs = _interopRequireDefault(require("systemjs"));

var _each2 = _interopRequireDefault(require("lodash/each"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Load a js file in sand box.
 * @param {string} file - Source file
 * @param {object} [variables] - Variables as global
 * @param {object} [deps] - Dependencies
 * @returns {AsyncFunction.<*>}
 */
function load_(_x, _x2, _x3) {
  return _load_.apply(this, arguments);
}

function _load_() {
  _load_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, variables, deps) {
    var loader;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loader = new _systemjs.default.constructor();

            if (variables) {
              loader.config({
                'global': variables
              });
            }

            if (deps) {
              (0, _each2.default)(deps, function (v, k) {
                loader.set(k, v);
              });
            }

            _context.next = 5;
            return loader.import(file);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _load_.apply(this, arguments);
}

var _default = load_;
exports.default = _default;
//# sourceMappingURL=load_.js.map