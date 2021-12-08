import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {
  ret: number = 0;
  constructor() { }

  Add(data1: number, data2: number): number {
    this.ret = + data2;
    return this.ret;
  }

  Sub(data1: number, data2: number): number {
    return data1 - data2;
  }
}
