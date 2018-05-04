import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  freelanceClicked() {
    this.router.navigateByUrl('/freelance');
  }

  officeClicked() {
    this.router.navigateByUrl('/office');
  }

  schoolClicked() {
    this.router.navigateByUrl('/school');
  }

  miscClicked() {
    this.router.navigateByUrl('/miscellaneous');
  }

}
