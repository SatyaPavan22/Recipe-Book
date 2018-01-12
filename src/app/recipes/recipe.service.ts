import {Recipe} from './recipe.model';
import {EventEmitter,Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService{
	
	constructor(private shoppingListSer:ShoppingListService){}
	private recipes:Recipe[] = [
	new Recipe("Dosa" , "Breakfast" ,"https://thumb7.shutterstock"+
		".com/display_pic_with_logo/100033/100033,1318991366,1/stock-photo-masala-dosa-87000179.jpg",[
		new Ingredient('Batter',20),
		new Ingredient('oil',10)])];
	getRecipes(){
		return this.recipes.slice();
	}

	recipeSelected = new EventEmitter<Recipe>();

	addIngredientsToShopping(ingredients:Ingredient[]){
		this.shoppingListSer.addIngredients(ingredients);
	}
}