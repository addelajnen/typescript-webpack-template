import PI from '@/classes/Pi';

export default class PiProvider {
    public async fetchPiAsync(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                return resolve(PI);
            }, 2000);
        });
    }
}
