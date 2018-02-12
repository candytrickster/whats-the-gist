import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstQuestionComponent } from './first-question/first-question.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'first-question', component: FirstQuestionComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}