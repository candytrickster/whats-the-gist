import { Component, OnInit, Directive, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideBigNav() {

  }

  hideSmallNav() {

  }

  showSmallNav() {

  }

  showBigNav() {

  }

  showMenuIconAnime(x) {
  	x.classList.toggle("change");
  }

  myFunction() {
  	console.log("hi");
	var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

 //  $scope.myFunction = function()
	// {
	// 	console.log("hi");
	// 	var x = document.getElementById("myTopnav");
	// 	if (x.className === "topnav") {
	// 		x.className += " responsive";
	// 	} else {
	// 		x.className = "topnav";
	// 	}
	// }




}
