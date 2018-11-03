export default class PiProvider {
    private readonly PI = 3.14;

    public async fetchPI() {
        return new Promise((resolve, reject) => {
            const DELAY = 2000;
            setTimeout(() => {
                return resolve(this.PI);
            }, DELAY);
        });
    }
}
