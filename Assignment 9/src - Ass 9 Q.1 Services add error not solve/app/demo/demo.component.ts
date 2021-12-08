import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  sum: number = 0;
  sub: number = 0;
  constructor(private _arithmetic: ArithmeticService) { }

  ngOnInit(): void {
  }

  display() {
    this.sum = this._arithmetic.Add(this.num1, this.num2);
    this.sub = this._arithmetic.Sub(this.num1, this.num2);
  }

}
