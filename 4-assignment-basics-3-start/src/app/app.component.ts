import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  counts = [];
  numberToShow = 0;
  numbersOfClicks = 0;


  tooglePassword(event: any){
    this.showPassword = this.showPassword ? false : true
    this.numbersOfClicks += 1
    this.counts.push(this.numbersOfClicks);
    console.log(this.numbersOfClicks)
  }

  getColor(){
    if(this.numbersOfClicks < 5){
      return 'white';
    }
    if(this.counts.length > 5){
      return 'blue';
    }
  }

}
