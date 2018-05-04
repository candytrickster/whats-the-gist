import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { FirstQuestionComponent } from './first-question/first-question.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { WorkComponent } from './work/work.component';
import { SchoolComponent } from './school/school.component';
import { MiscComponent } from './misc/misc.component';


const routes: Routes = [
  { path: 'first-question', component: FirstQuestionComponent },
  { path: 'freelance', component: FreelanceComponent },
  { path: 'office', component: WorkComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'miscellaneous', component: MiscComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}