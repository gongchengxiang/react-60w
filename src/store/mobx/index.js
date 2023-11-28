import { makeAutoObservable } from 'mobx';

class Num {
    num = 0;

    constructor() {
        makeAutoObservable(this);
    }

    inc() {
        this.num += 1;
    }

    dec() {
        this.num -= 1;
    }
}

export default new Num();
