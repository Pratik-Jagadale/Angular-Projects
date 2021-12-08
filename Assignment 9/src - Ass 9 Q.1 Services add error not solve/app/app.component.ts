import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str: string = "Hello from parent";

  fun(event: any) {
    this.str = event.target.value;
  }
}
