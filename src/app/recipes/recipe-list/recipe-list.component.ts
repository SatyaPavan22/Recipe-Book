import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
	new Recipe("Dosa" , "Tiffins" ,"https://thumb7.shutterstock"+
		".com/display_pic_with_logo/100033/100033,1318991366,1/stock-photo-masala-dosa-87000179.jpg")];
  constructor() { }

  ngOnInit() {
  }

}
