import { isDir, isDir_ } from '../fs';

describe('unit:fs', function() {
    it('fs isDir',  function () {
        isDir(__filename).should.not.be.ok();
        isDir(__dirname).should.be.ok();
    });

    it('fs isDir_',  async function () {
        (await isDir_(__filename)).should.not.be.ok();
        (await isDir_(__dirname)).should.be.ok();
    });
});