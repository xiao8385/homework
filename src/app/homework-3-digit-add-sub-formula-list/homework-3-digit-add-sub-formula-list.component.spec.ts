import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework3DigitAddSubFormulaListComponent } from './homework-3-digit-add-sub-formula-list.component';

describe('Homework3DigitAddSubFormulaListComponent', () => {
  let component: Homework3DigitAddSubFormulaListComponent;
  let fixture: ComponentFixture<Homework3DigitAddSubFormulaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework3DigitAddSubFormulaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework3DigitAddSubFormulaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
