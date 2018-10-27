export default class PiProvider {
    protected PI: number;

    public constructor() {
        this.PI = 3.14;
    }

    public async fetchPiAsync(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                return resolve(this.PI);
            }, 2000);
        });
    }
}
