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

    isDisabled=false;

    submitEnabled = false;
    setSubmit(event: any) {
	this.submitEnabled = true;
    };

    humanValidated=false;
    humanCheck(event: any) {
	if (event.target.value == (2+3)) {
	    this.humanValidated = true;
	}
	else {
	    this.humanValidated = false;
	}
    }
}
