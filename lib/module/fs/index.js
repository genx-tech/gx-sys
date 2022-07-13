import fs from 'fs-extra';
export const isDir = path => fs.lstatSync(path).isDirectory();
export const isDir_ = async path => (await fs.lstat(path)).isDirectory();
//# sourceMappingURL=index.js.map