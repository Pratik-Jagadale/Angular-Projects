import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technology = ["UNIX", "C++", "Type Script"];
  constructor() { }

  ngOnInit(): void {
  }

}
