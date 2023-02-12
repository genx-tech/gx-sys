/**
 * @constant {fs} fs
 */
export { default as fs } from 'fs-extra';

/**
 * @constant {glob} glob
 */
export { default as glob } from 'glob-promise';

/**
 * @namespace helpers
 */
export { default as tryRequire } from './helpers/tryRequire';

/** @module fs */
export * from './fs';

/** @module cmd */
export * as cmd from './shell/cmd';
