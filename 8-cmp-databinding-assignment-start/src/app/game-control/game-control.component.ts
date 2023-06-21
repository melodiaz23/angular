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

onStartGame() {
  this.ref = setInterval(() => {
    this.num = this.num + 1;
    console.log(this.num);
    this.eventCreated.emit(+this.num);
  }, 1000);
}

onStopGame(){
  clearInterval(this.ref);
}


}
