import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  intervalId: any;
  num: number = 0;

  startEvent() {
    this.intervalId = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000);
  }

  stopEvent(){
    clearInterval(this.intervalId);
  }
}
