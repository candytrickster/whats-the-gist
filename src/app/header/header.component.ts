import { Component, OnInit, Directive, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  showMenu() {
	var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  goToDonate() {
    this.router.navigateByUrl('/');
  }
  
  goToContact() {
    this.router.navigateByUrl('/');
  }

}
