import { Component, OnInit } from '@angular/core';

import { Exercise } from '../exercise';
import { HomeWork } from '../math/home-work';


@Component({
  selector: 'app-homework-3-digit-add-sub-formula-list',
  templateUrl: './homework-3-digit-add-sub-formula-list.component.html',
  styleUrls: ['./homework-3-digit-add-sub-formula-list.component.css']
})
export class Homework3DigitAddSubFormulaListComponent implements OnInit {

  verticalList: Exercise[] = [];
  oralList: Exercise[] = [];
  console: Console;

  constructor() { }

  ngOnInit() {

    console.log('ngOnInit...');
    // this.mockGenerateFormula();
    this.generateFormula();
  }

  regenerate() {
    console.log('regenerate...');
    this.generateFormula();
  }

  generateFormula() {

    console.log('generateFormula...');
    const homework = new HomeWork;
    console.log('new HomeWork...');
    this.verticalList = homework.verticalList;
    this.oralList = homework.oralList;
  }

  // mockGenerateFormula() {
  //   this.verticalList = [
  //     { no: 1, formula: '905 - 512', answer: '383' },
  //     { no: 2, formula: '772 - 623', answer: '149' },
  //     { no: 3, formula: '444 + 551', answer: '995' },
  //     { no: 4, formula: '389 + 606', answer: '995' },
  //     { no: 5, formula: '334 - 310', answer: '24' },
  //     { no: 6, formula: '658 + 113', answer: '771' },
  //     { no: 7, formula: '980 - 250', answer: '730' }
  //   ];
  //   this.oralList = [
  //     { no: 1, formula: '905 - 512', answer: '383' },
  //     { no: 2, formula: '772 - 623', answer: '149' },
  //     { no: 3, formula: '444 + 551', answer: '995' },
  //     { no: 4, formula: '389 + 606', answer: '995' },
  //     { no: 5, formula: '334 - 310', answer: '24' },
  //     { no: 6, formula: '658 + 113', answer: '771' },
  //     { no: 7, formula: '980 - 250', answer: '730' },
  //     { no: 8, formula: '905 - 512', answer: '383' },
  //     { no: 9, formula: '772 - 623', answer: '149' },
  //     { no: 10, formula: '444 + 551', answer: '995' },
  //     { no: 11, formula: '389 + 606', answer: '995' },
  //     { no: 12, formula: '334 - 310', answer: '24' },
  //     { no: 13, formula: '658 + 113', answer: '771' },
  //     { no: 14, formula: '980 - 250', answer: '730' },
  //     { no: 15, formula: '905 - 512', answer: '383' },
  //     { no: 16, formula: '772 - 623', answer: '149' },
  //     { no: 17, formula: '444 + 551', answer: '995' },
  //     { no: 18, formula: '389 + 606', answer: '995' },
  //     { no: 19, formula: '334 - 310', answer: '24' },
  //     { no: 20, formula: '658 + 113', answer: '771' },
  //     { no: 21, formula: '980 - 250', answer: '730' },
  //     { no: 22, formula: '905 - 512', answer: '383' },
  //     { no: 23, formula: '772 - 623', answer: '149' },
  //     { no: 24, formula: '444 + 551', answer: '995' },
  //     { no: 25, formula: '389 + 606', answer: '995' },
  //     { no: 26, formula: '334 - 310', answer: '24' },
  //     { no: 27, formula: '658 + 113', answer: '771' },
  //     { no: 28, formula: '980 - 250', answer: '730' },
  //     { no: 29, formula: '905 - 512', answer: '383' },
  //     { no: 30, formula: '772 - 623', answer: '149' },
  //     { no: 31, formula: '444 + 551', answer: '995' },
  //     { no: 32, formula: '389 + 606', answer: '995' },
  //     { no: 33, formula: '334 - 310', answer: '24' },
  //     { no: 34, formula: '658 + 113', answer: '771' },
  //     { no: 35, formula: '980 - 250', answer: '730' },
  //     { no: 36, formula: '905 - 512', answer: '383' },
  //     { no: 37, formula: '772 - 623', answer: '149' },
  //     { no: 38, formula: '444 + 551', answer: '995' },
  //     { no: 39, formula: '389 + 606', answer: '995' },
  //     { no: 40, formula: '334 - 310', answer: '24' }
  //   ];
  // }

}
