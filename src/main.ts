import PiProvider from './classes/PiProvider';

(async () => {
    let pi = null;
    try {
        process.stdout.write('fetching pi async ...');
        pi = await (new PiProvider()).fetchPiAsync();
        process.stdout.write('ok!\n');        
    } catch (e) {        
        process.stdout.write('failed!\n');
        pi = null;
    }    

    if (pi !== null) {
        process.stdout.write(`pi = ${pi}`);
    }
})();