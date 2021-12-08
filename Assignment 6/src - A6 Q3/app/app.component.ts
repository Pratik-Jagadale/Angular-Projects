import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{title}}</h1>`,

  styles: [`
   h1{
    color:blue
    } 
  `]

})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
