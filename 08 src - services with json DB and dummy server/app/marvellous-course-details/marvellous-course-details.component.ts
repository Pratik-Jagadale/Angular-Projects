import { Component, OnInit } from '@angular/core';
import { MarvellousCourseService } from '../marvellous-course.service';

@Component({
  selector: 'app-marvellous-course-details',
  templateUrl: './marvellous-course-details.component.html',
  styleUrls: ['./marvellous-course-details.component.css']
})
export class MarvellousCourseDetailsComponent implements OnInit {

  course: any = [];
  constructor(private _marvellousServices: MarvellousCourseService) {

  }

  ngOnInit(): void {
    this._marvellousServices.getBatchDetails().
      subscribe(data => this.course = data);
  }

}
