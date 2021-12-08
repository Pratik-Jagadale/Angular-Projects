import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public array = [10, 20, 30, 40, 50];

  constructor() { }

  ngOnInit(): void {
  }

}
