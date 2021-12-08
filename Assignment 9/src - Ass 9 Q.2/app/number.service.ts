import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  i: number = 2;
  constructor() { }

  chkPrime(num1: number) {

    for (this.i = 2; this.i < num1 / 2; this.i++)
      if (num1 % this.i == 0) {
        return true;
      }
    return false;

  }
}
