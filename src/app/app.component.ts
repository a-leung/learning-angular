import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    words = {
	"cat": {
	    "show": false,
	    "url": "https://www.dropbox.com/s/ip7trvghw45n4yc/cat.jpeg?raw=1",
	},
	"dog": {
	    "show": false,
	    "url": "https://www.dropbox.com/s/ugeqlxvawfqwhth/dog_by_roaming_angel.jpeg?raw=1",
	},
	"cow": {
	    "show": false,
	    "url": "https://www.dropbox.com/s/h7kfnipb6ix1xxb/cow.jpeg?raw=1",
	},
	"ngIf": {
	    "show": false,
	    "url": "",
	}
    }

    word_list = Object.keys(this.words)

    imageCheck(event: any) {
	let input_string = event.target.value;
	for(var word of this.word_list) {
	    this.words[word].show = (new RegExp(word)).test(input_string)
	}
    }
}
