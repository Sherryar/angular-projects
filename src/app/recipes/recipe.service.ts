import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://cdn.pixabay.com/photo/2016/10/25/13/28/papaya-salad-1768888_960_720.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A nother Recipe',
      'This is simple a test',
      'https://cdn.pixabay.com/photo/2016/10/25/13/28/papaya-salad-1768888_960_720.jpg',
      [
        new Ingredient('Carrots', 5),
        new Ingredient('Sweet Potatoes', 15)
      ]),
    new Recipe('A lovely dessert',
      'This is simple a test',
      'https://cdn.pixabay.com/photo/2016/10/25/13/28/papaya-salad-1768888_960_720.jpg',
      [
        new Ingredient('Strawberries', 3),
        new Ingredient('Orange Slices', 12)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
