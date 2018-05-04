import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TypingTextComponent } from './typing-text/typing-text.component';
import { LandingService } from './landing.service';
import { WorkService } from './work.service';
import { SchoolService } from './school.service';
import { FreelanceService } from './freelance.service';
import { WorkComponent } from './work/work.component';
import { SchoolComponent } from './school/school.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstQuestionComponent } from './first-question/first-question.component';

import { AppRoutingModule }     from './app-routing.module';
import { MiscComponent } from './misc/misc.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    TypingTextComponent,
    WorkComponent,
    SchoolComponent,
    FreelanceComponent,
    HeaderComponent,
    FooterComponent,
    FirstQuestionComponent,
    MiscComponent
  ],
  providers: [LandingService, WorkService, SchoolService, FreelanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
