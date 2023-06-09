import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipe: boolean = true;
  showList: boolean = false;

  onNavigate(event: string){
    console.log('event:' + event);
    if (event === 'recipe'){
      this.showList = false;
      this.showRecipe = true;
    }
    if (event === 'shoping-list'){
      this.showRecipe = false; 
      this.showList = true;
    }
  }
}
