"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _module = require("module");

var _july = require("@genx/july");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tryRequireBy(packageName, mainModule, throwWhenNotFound) {
  try {
    if (typeof mainModule === 'string') {
      const require2 = (0, _module.createRequire)(_july.text.ensureEndsWith(mainModule, _path.default.sep));
      return require2(packageName);
    }

    return mainModule.require(packageName);
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      if (throwWhenNotFound) {
        let pkgPaths = packageName.split('/');
        let npmPkgName = pkgPaths[0];

        if (npmPkgName.startsWith('.')) {
          //path 
          throw error;
        }

        if (npmPkgName.startsWith('@') && pkgPaths.length > 1) {
          npmPkgName += '/' + pkgPaths[1];
        }

        let pos1 = error.message.indexOf("'");
        let realModuleName = error.message.substr(pos1 + 1);
        let pos2 = realModuleName.indexOf("'");
        realModuleName = realModuleName.substr(0, pos2);

        if (realModuleName === packageName) {
          throw new Error(`Module "${packageName}" not found. Try run "npm install ${npmPkgName}" to install the dependency.`);
        }

        throw error;
      }

      return undefined;
    }

    throw error;
  }
}
/**
 * Try require a package module and show install tips if not found.
 * @alias helpers.tryRequire
 * @param {string} packageName
 * @returns {object}
 */


function tryRequire(packageName, basePath) {
  return tryRequireBy(packageName, require.main, basePath == null) || tryRequireBy(packageName, basePath, true);
}

;
var _default = tryRequire;
exports.default = _default;
//# sourceMappingURL=tryRequire.js.map