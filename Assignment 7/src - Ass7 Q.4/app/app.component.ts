import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MARVELLOUS INFOSYSTEMS';

  upper() {
    this.title = this.title.toUpperCase();
  }

  lower() {
    this.title = this.title.toLowerCase();
  }
}
