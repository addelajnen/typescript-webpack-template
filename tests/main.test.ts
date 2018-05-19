const PI: number = 3.14;

describe('pi or pie', () => {
    it('pies the pi', () => {
        expect(PI).toBeCloseTo(3.14);
    });
});