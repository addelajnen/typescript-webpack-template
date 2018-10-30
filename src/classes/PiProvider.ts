import PI from '@/classes/Pi';

export default class PiProvider {
    public async fetchPiAsync(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            const delay = 2000;
            setTimeout(() => {
                return resolve(PI);
            }, delay);
        });
    }
}
