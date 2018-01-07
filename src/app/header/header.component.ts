import {Component , Output, EventEmitter} from "@angular/core";

@Component({
	templateUrl:'./header.component.html',
	selector:'app-header',
	styleUrls:['./header.component.css']
})
export class HeaderComponent{

	@Output() clickedItem = new EventEmitter<string>();

	recipeClicked(){
		this.clickedItem.emit("Recipe");
	}

	shoppingListClicked(){
		this.clickedItem.emit("Shopping");
	}

}