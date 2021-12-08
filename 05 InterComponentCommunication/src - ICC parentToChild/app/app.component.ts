import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inter Component Communication';

  str: string = "Hello child !!!";

  constructor() {
  }
  public fun(): string {
    return "Marvellous Infosystem";
  }

}
