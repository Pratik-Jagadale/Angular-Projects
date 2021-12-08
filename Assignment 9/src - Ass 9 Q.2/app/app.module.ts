import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StringService } from './string.service';
import { NumberService } from './number.service'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [StringService, NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
