import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  manageRecipeClicked : Boolean = false

  manageRecipe(){
    this.manageRecipeClicked = !this.manageRecipeClicked;
    // if (this.manageRecipeClicked){
    //   this.manageRecipeClicked = false;
    // } else {
    //   this.manageRecipeClicked = true
    // }
  }
}
