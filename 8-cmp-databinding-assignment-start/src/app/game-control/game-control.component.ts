import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() eventCreated = new EventEmitter<number>();
  num: number = 0;
  ref: any;

oddNumber: number[] = [];
evenNumber: number[] = [];

startEvent() {
  this.ref = setInterval(() => {
    this.num = this.num + 1;
    console.log(this.num);
    this.eventCreated.emit(+this.num);
    this.newNumberGenerated(this.num)
  }, 1000);
}

stopEvent(){
  clearInterval(this.ref);
}

newNumberGenerated(num: number){
  if (num % 2 === 0){
    console.log('EVEN');
    this.evenNumber.push(num);
    console.log(this.evenNumber);
  }

  if (num % 2 === 1){
    console.log('ODD');
    this.oddNumber.push(num);
    console.log(this.oddNumber);
  }
}

}
