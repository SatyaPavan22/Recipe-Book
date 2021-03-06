import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {ShoppingListService} from '../shoppinglist.service';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


	@ViewChild('nameInput') nameInputRef:ElementRef;
	@ViewChild('amountInput') amountInputRef:ElementRef;
	//ingredientAdded 
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
  	const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
  	this.slService.addIngredient(newIngredient);
  }
}
