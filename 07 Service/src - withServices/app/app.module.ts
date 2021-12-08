import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MarvellousCourseDetailsComponent } from './marvellous-course-details/marvellous-course-details.component';
import { MarvellousCourseListComponent } from './marvellous-course-list/marvellous-course-list.component';
import { MarvellousCourseService } from './marvellous-course.service' //import the required service 

@NgModule({
  declarations: [
    AppComponent,
    MarvellousCourseDetailsComponent,
    MarvellousCourseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MarvellousCourseService], //register our services
  bootstrap: [AppComponent]
})
export class AppModule { }
