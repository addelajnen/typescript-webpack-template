import PiProvider from './classes/PiProvider';

const main = new Promise(async (resolve, reject) => {
    try {
        process.stdout.write('fetching pi async ...');
        const pi = await new PiProvider().fetchPiAsync();
        process.stdout.write('ok!\n');
        return resolve();
    } catch (e) {
        process.stdout.write('failed!\n');
        return reject(e);
    }
});
