import PiProvider from '@/classes/PiProvider';

(async () => {
    try {
        const PI = await new PiProvider().fetchPI();

        // tslint:disable-next-line
        console.log(`PI = ${PI}`);
    } catch (e) {
        // tslint:disable-next-line
        console.log(`Failed to fetch PI`);
    }
})();
