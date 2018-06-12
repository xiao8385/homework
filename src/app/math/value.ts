export class Value {

    digit = 3;
    it: number;
    min = 100;
    max = 999;

    console: Console;

    MAX_DIGIT = 5;

    constructor() {
        do {
            // random a value between this.min and this.max
            this.it = Math.floor(Math.random() * this.max) + this.min;
            console.log('it: %s', this.it);
        } while (this.it >= 1000)
    }
}
