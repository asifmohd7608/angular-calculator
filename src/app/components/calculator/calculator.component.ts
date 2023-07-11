import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  input:string='';
  numbers:number[]=[1,2,3,4,5,6,7,8,9,0];
  operators:string[]=['*','/','+','-'];

addToInput=(value:string)=>{

  this.input=this.input + value;
}

deleteLastEntry=()=>{
  this.input=this.input.toString()
  this.input=this.input.slice(0,-1);
}

clearInput=()=>{
  this.input='';
}

findResult=()=>{
  try {
    let finalInputString=this.input.replace(/\b0+(\d)/g, '$1');
    this.input=eval(finalInputString) ;
  } catch (error) {
    console.log(error);
  }
};
}
