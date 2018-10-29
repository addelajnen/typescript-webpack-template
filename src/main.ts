import PiProvider from '@/classes/PiProvider';

new Promise(async (resolve: any, reject: any) => {
    try {
        process.stdout.write('fetching pi async ...');
        const pi = await new PiProvider().fetchPiAsync();
        process.stdout.write('ok!\n');

        return resolve(pi);
    } catch (e) {
        process.stdout.write('failed!\n');
        return reject(e);
    }
})
    .then(pi => {
        console.log(`PI = ${pi}`);
    })
    .catch((reason: any) => {
        console.log(`PI is dead`);
    });
