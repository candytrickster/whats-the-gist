import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TypingTextComponent } from './typing-text/typing-text.component';
import { LandingService } from './landing.service';
import { WorkService } from './work.service';
import { SchoolService } from './school.service';
import { FreelanceService } from './freelance.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TypingTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LandingService, WorkService, SchoolService, FreelanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
