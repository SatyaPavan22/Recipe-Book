import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() myRecipe:Recipe
  @Output() selectedItem = new EventEmitter<void>();
  selectRecipeItem(){
  	this.selectedItem.emit();
  }
}
