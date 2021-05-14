import tryRequire from '../helpers/tryRequire';
import path from 'path';

describe('unit:tryRequire', function() {
    it('require a node module in dependencies',async function () {
        const july = tryRequire('@genx/july');    
        should.exist(july);        
    });

    it('require a non-exist module',async function () {        
        should.throws(() => {
            tryRequire('non-exist');
        }, /^Error: Module "non-exist" not found. Try run "npm install non-exist" to install the dependency./);        
    });  

    it('require a module with basePath',async function () {
        should.throws(() => {
            tryRequire('./fakeLib');
        }, /^Error: Cannot find module '.\/fakeLib'/);       
         
    });  
    
    it('require a module with basePath',async function () {
        tryRequire('./fakeLib',  path.resolve(__dirname, '../../test/files'));
    });  
});