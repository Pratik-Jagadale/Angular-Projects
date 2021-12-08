import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  cnt: number = 0;
  i: number = 0;
  constructor() { }

  countCapital(str: string) {
    this.cnt = 0;
    for (this.i = 0; this.i < str.length; this.i++) {
      if (str.charAt(this.i) == str.charAt(this.i).toUpperCase()) {
        this.cnt++;
      }
    }

    return this.cnt;
  }
}
