import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { ArithmeticService } from './arithmetic.service';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ArithmeticService], //register our services
  bootstrap: [AppComponent]
})
export class AppModule { }
