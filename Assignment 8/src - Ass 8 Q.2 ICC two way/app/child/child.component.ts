import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public msg: string = "";
  @Output() public myEmitter = new EventEmitter();
  @Input() public parentData = "";

  emitEvent() {
    this.myEmitter.emit(this.msg);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
