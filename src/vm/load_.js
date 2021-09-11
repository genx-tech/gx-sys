import System from 'systemjs';
import _each from 'lodash/each';

/**
 * Load a js file in sand box.
 * @alias vm.load_
 * @param {string} file - Source file
 * @param {object} [variables] - Variables as global
 * @param {object} [deps] - Dependencies
 * @returns {AsyncFunction.<*>}
 */
async function load_(file, variables, deps) {
    let loader = new System.constructor();

    if (variables) {
        loader.config({ global: variables });
    }

    if (deps) {
        _each(deps, (v, k) => {
            loader.set(k, v);
        });
    }

    return await loader.import(file);
}

export default load_;
