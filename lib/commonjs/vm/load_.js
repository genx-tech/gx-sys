"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _systemjs = _interopRequireDefault(require("systemjs"));

var _each2 = _interopRequireDefault(require("lodash/each"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load a js file in sand box.
 * @alias vm.load_
 * @param {string} file - Source file
 * @param {object} [variables] - Variables as global
 * @param {object} [deps] - Dependencies
 * @returns {AsyncFunction.<*>}
 */
async function load_(file, variables, deps) {
  let loader = new _systemjs.default.constructor();

  if (variables) {
    loader.config({
      global: variables
    });
  }

  if (deps) {
    (0, _each2.default)(deps, (v, k) => {
      loader.set(k, v);
    });
  }

  return await loader.import(file);
}

var _default = load_;
exports.default = _default;
//# sourceMappingURL=load_.js.map