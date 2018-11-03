import PiProvider from '@/classes/PiProvider';

describe('pi or pie', () => {
    it('pies the pi', async () => {
        const PI = 3.14;
        expect(await new PiProvider().fetchPI()).toBeCloseTo(PI);
    });
});
