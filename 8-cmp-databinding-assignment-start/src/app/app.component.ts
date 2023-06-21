import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber: number[] = [];
  evenNumber: number[] = [];

  numberGenerated(event: number){
    console.log('Event emmited');
    if (event % 2 === 0){
      console.log('EVEN');
      this.evenNumber.push(event);
      console.log(this.evenNumber);
    }
  
    if (event % 2 === 1){
      console.log('ODD');
      this.oddNumber.push(event);
      console.log(this.oddNumber);
    }
  }

}