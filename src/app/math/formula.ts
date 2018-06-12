import { Value } from './value';

export class Formula {


    formula: string;
    result: number;
    operator: string;

    console: Console;

    constructor() {

        this.randomOperator();

        this.calculate();
    }

    calculate() {

        do {
            let value1 = new Value;
            let value2 = new Value;

            if (this.operator == '-' && value1.it < value2.it) {
                const valueTrans = value1;
                value1 = value2;
                value2 = valueTrans;
            }

            this.formula = '' + value1.it;
            this.formula = this.formula + ' ';
            this.formula = this.formula + this.operator;
            this.formula = this.formula + ' ';
            this.formula = this.formula + value2.it;

            // switch (this.operator) {
            //     case '+':
            //         this.result = value1.it + value2.it;
            //         break;
            //     case '-':
            //         this.result = value1.it - value2.it;
            //         break;
            //     default:
            //         this.result = 0;
            //         break;
            // }

            if (this.operator == '+') {
                this.result = value1.it + value2.it;
            } else if (this.operator == '-') {
                this.result = value1.it - value2.it;
            }

            console.log('formula: %s, result: %s,', this.formula, this.result);
        } while (this.result >= 1000)
    }

    randomOperator() {
        const k = Math.floor(Math.random() * 10) % 2;
        if (k === 0) {
            this.operator = '+';
        } else {
            this.operator = '-';
        }
    }
}
