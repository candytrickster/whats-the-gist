import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	private typewriter_text: string = "Thank you for your interest";
	private typewriter_display: string = "";

	constructor() { }

	ngOnInit() {
		this.typingCallback(this);
	}

	typingCallback(that) {
		let total_length = that.typewriter_text.length;
		let current_length = that.typewriter_display.length;
		if (current_length < total_length) {
			that.typewriter_display += that.typewriter_text[current_length];
		} else {
			that.typewriter_display = "";
		}
		setTimeout(that.typingCallback, 100, that);
	}

}
