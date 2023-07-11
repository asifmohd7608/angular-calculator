import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
@Input() operator:string='';
@Output() operatorEvent=new EventEmitter<string>()

emitOperator=(value:string)=>{
  this.operatorEvent.emit(value)
}
}
