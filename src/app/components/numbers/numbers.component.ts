import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent {
@Input() number:number=0
@Output() numberEvent=new EventEmitter<string>()

emitNumber=(value:number)=>{
  let stringValue:string=value.toString()
  this.numberEvent.emit(stringValue)
}
}
