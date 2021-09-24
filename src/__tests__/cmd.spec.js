import { runLive_ } from '../shell/cmd';

describe('unit:cmd', function() {
    it('cmd live',  async function () {
        const code = await runLive_('ls', ['-l']);
        code.should.be.exactly(0);       
    });

    it('cmd live 2',  async function () {
        await runLive_('ls', ['-l'], (data) => {
            console.log('stdout', data.toString());
        }, (data) => {
            console.error('stderr', data.toString());
        });
    });
});