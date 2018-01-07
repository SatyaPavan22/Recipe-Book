import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedValue= "Recipe";
  showClicked(clickedItem){
  	this.selectedValue = clickedItem;
  }
}
