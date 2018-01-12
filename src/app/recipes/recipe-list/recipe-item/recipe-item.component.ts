import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  @Input() myRecipe:Recipe
 selectedItem = new EventEmitter<void>();
  selectRecipeItem(){
  	this.recipeService.recipeSelected.emit(this.myRecipe);
  }
}
