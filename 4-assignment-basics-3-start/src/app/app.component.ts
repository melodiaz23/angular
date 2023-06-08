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


  tooglePassword(){
    this.showPassword = this.showPassword ? false : true
    this.numbersOfClicks += 1
    this.counts.push(this.numbersOfClicks);
  }

}
