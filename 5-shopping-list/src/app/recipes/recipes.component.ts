import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  showDetails: boolean = false

  wantToShow(event: boolean){
    this.showDetails = event
  }

}
