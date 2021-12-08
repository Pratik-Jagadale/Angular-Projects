import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  public childData: string = "";

  @Output() public myEvent = new EventEmitter();

  public fun() {
    this.myEvent.emit(this.childData);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
