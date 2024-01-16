import { Component } from '@angular/core';

@Component({
  selector: 'app-modified-calculator',
  templateUrl: './modified-calculator.component.html',
  styleUrls: ['./modified-calculator.component.scss']
})
export class ModifiedCalculatorComponent {
  updatedAmount: number = 0;
  updatedPercentage: number = 0;
  inputValues: string[] = [];
  firstmonthAmount: number=0;
  SecondmonthAmount: number = 0;

  changeamountRange(value: any, range: HTMLInputElement) {

    range.value = value.target.value;
    this.updatedAmount = Number(range.value)
  }
  firstMonth(value: any, range: HTMLInputElement) {

    range.value = value.target.value;
    this.firstmonthAmount = Number(range.value)
  }
  secondMonth(value: any, range: HTMLInputElement) {

    range.value = value.target.value;
    this.SecondmonthAmount = Number(range.value)
  }

  changepercentRange(value: any, range: HTMLInputElement) {

    range.value = value.target.value;
    this.updatedPercentage = Number(range.value)

  }

  numberOfInputs: number = 0;
  numberofMonths:number = 0
  array:any=[]
  array2:any=[]

  inputs() {
    this.array=[]
    for(let i=0;i<this.numberOfInputs;i++) {
      this.array.push(i+1)
      
    }
    console.log(this.array,'32:')
  }
  months(){
    this.array2=[]
    for(let i=0;i<this.numberofMonths;i++) {
      this.array2.push(i+1)
      
    }
  }
}
