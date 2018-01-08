import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.css']
})
export class TypingTextComponent implements OnInit {

	messages: Message[];

	private typewriter_index: number = 0;
	private typewriter_text: string = "Thanks!";
	private typewriter_display: string = "";


	constructor(
		private landingService: LandingService ) { }

	ngOnInit() {
		this.getMessages();
		this.typewriter_text = this.messages[this.typewriter_index].angryMsg;
		this.typingCallback(this);
	}

	getMessages(): void {
	  this.landingService.getMessages()
      .subscribe(messages => this.messages = messages);
	}

	typingCallback(that) {
		let total_length = that.typewriter_text.length;
		let current_length = that.typewriter_display.length;
		if (current_length < total_length) {
			that.typewriter_display += that.typewriter_text[current_length];
			setTimeout(that.typingCallback,75, that);
		} else {
			// that.typewriter_display = "";
			that.sleep(1000);
			that.backwardsTypingCallback(that);
		}
		
	}

	backwardsTypingCallback(that) {
		let total_length = that.typewriter_text.length;
		let current_length = that.typewriter_display.length;
		let element = document.getElementById('msg');

		if (current_length > 0) {
			that.typewriter_display = that.typewriter_text.substring(0, (current_length-1));
			setTimeout(that.backwardsTypingCallback, 40, that);
		} else {
			if(that.typewriter_text == that.messages[that.typewriter_index].angryMsg) {
				that.typewriter_text = that.messages[that.typewriter_index].proMsg;
				element.classList.add("professionalText");
			} else if(that.typewriter_index < that.messages.length - 1) {
				that.typewriter_index += 1;
				that.typewriter_text = that.messages[that.typewriter_index].angryMsg;
				element.classList.remove("professionalText");
			} else {
				that.typewriter_index = 0;
				that.typewriter_text = that.messages[that.typewriter_index].angryMsg;
				element.classList.remove("professionalText");
			}
			that.typingCallback(that);
		}


	}

	sleep(miliseconds) {
		var currentTime = new Date().getTime();
		while (currentTime + miliseconds >= new Date().getTime()) {
		}
	}

}
