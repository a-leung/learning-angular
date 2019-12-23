import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    today_date = new Date();  // the current date -> page
    input_value = ''; // set by user input (onKey event); page -> onKey -> page
    onKey(event: any) {
	this.input_value = event.target.value; // += event.target.value + '   ' ;
    };

    two_way_value; // by Angular using: FormsModule
}
