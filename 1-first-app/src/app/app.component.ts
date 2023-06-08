import { Component } from '@angular/core';

@Component({ //app component decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerBlue;
    }
  `]
})
export class AppComponent {

}
