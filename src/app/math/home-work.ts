import { Exercise } from '../exercise';
import { Formula } from './formula';

export class HomeWork {

    verticalList: Exercise[] = [];
    oralList: Exercise[] = [];

    constructor() {

        this.verticalList = this.generateExercise(5);
        this.oralList = this.generateExercise(40);
    }

    generateExercise(count: number): Exercise[] {

        const execList: Exercise[] = [];
        for (let index = 0; index < count; index++) {
            const exec = new Exercise;
            exec.no = this.formatNumber((index + 1), 2);
            // ;
            const formula = new Formula;
            exec.formula = formula.formula;
            exec.answer = formula.result.toString();
            execList.push(exec);
        }

        return execList;
    }

    formatNumber(num: number, digit: number): string {
        let str = '' + num.valueOf();
        const length = str.length;
        if (length < digit) {
            for (let index = 0; index < digit - str.length; index++) {
                str = '0' + str;
            }
        }
        return str;
    }
}
