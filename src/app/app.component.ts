import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    show_ngIf = false;
    show_dog = false;
    imageCheck(event: any) {
	let input_string = event.target.value;

	this.show_ngIf = /.*ngIf.*/.test(input_string);
	this.show_dog = /.*dog.*/.test(input_string);
    }
}
