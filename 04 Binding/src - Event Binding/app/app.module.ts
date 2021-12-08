import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirDirective } from './my-dir.directive';
import { EventbindingDemoComponent } from './eventbinding-demo/eventbinding-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    EventbindingDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
