import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding-demo',
  templateUrl: './eventbinding-demo.component.html',
  styleUrls: ['./eventbinding-demo.component.css']
})
export class EventbindingDemoComponent implements OnInit {

  public str: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  MarvellousEvent() {
    console.log("button Pressed");
  }

  MarvellousNewEvent() {
    this.str = "Button is clicked";
  }

  MarvellousEventInforamtion(value: any) {
    console.log(value);
  }

}
