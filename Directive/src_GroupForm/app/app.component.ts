import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  MarvellousForm = new FormGroup(
    {
      Name: new FormControl('Pratik'),
      MobileNo: new FormControl(),
      Emailid: new FormControl(),
      EnquieryType: new FormControl(),
      EnquierDescription: new FormControl(),
    });

}
