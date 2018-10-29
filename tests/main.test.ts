import PiProvider from '@/classes/PiProvider';

describe('pi or pie', () => {
    it('pies the pi', async () => {
        expect(await new PiProvider().fetchPiAsync()).toBeCloseTo(3.14);
    });
});
