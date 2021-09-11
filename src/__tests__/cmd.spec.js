import { runLive_ } from '../shell/cmd';

describe('unit:cmd', function() {
    it('cmd live',  async function () {
        const code = await runLive_('ls', ['-l']);
        code.should.be.exactly(0);       
    });
});