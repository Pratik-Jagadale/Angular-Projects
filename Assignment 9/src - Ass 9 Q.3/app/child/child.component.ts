import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
  }

  str: string = "";
  strprime: string = "";
  num: number = 0;
  capsCnt: number = 0;
  bool: boolean = false;

  constructor(private _objNumSer: NumberService, private _objStringser: StringService) {

  }

  chkPrime() {
    this.bool = this._objNumSer.chkPrime(this.num);
    if (this.num == null) {
      this.strprime = "please enter the number...";
    }
    if (this.bool == true) {
      this.strprime = "given number is prime";
      return;
    }
    this.strprime = "given number is not prime";
  }

  CountCapital() {
    this.capsCnt = this._objStringser.countCapital(this.str);
  }

}
