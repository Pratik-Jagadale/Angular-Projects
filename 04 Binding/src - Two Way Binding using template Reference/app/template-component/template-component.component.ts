import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.css']
})
export class TemplateComponentComponent implements OnInit {

  public iData: string = "";

  public getData(str: string) {
    this.iData = str;
    console.log(str);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
