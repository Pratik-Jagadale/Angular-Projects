import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousCourseService {

  constructor() { }

  getBatchDetails() {
    return [
      { "name": "PPL", "fee": "12000", "duration": 3.5 },
      { "name": "LB", "fee": "12000", "duration": 6 },
      { "name": "python", "fee": "12000", "duration": 6 },
      { "name": "Angular", "fee": "12000", "duration": 3 },
      { "name": "C#.net", "fee": "12000", "duration": 6 },
    ];
  }
}
