import { createRequire } from 'module';  
import { text } from '@genx/july';
import path from 'path';

function tryRequireBy(packageName, mainModule, throwWhenNotFound) {        
    try {            
        if (typeof mainModule === 'string') {
            const require2 = createRequire(text.ensureEndsWith(mainModule, path.sep));
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
                let realModuleName = error.message.substr(pos1+1);
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
 * @param {string} packageName
 */
function tryRequire(packageName, basePath) {    
    return tryRequireBy(packageName, require.main, basePath == null) || tryRequireBy(packageName, basePath, true);
};

export default tryRequire;