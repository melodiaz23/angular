import { Component, EventEmitter, Output } from '@angular/core';

import {  Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() showDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/casserole-recipes-6478d7f325a3a.jpeg'),
    new Recipe('Second Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/casserole-recipes-6478d7f325a3a.jpeg'),
    new Recipe('Third Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/casserole-recipes-6478d7f325a3a.jpeg')
  ];

  constructor(){
  }

  onRecipeSelected(recipe: Recipe){
    this.showDetails.emit(recipe);
  }

}
