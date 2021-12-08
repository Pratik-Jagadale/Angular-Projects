import { Component, OnInit } from '@angular/core';
import { MarvellousCourseService } from '../marvellous-course.service'

@Component({
  selector: 'app-marvellous-course-list',
  templateUrl: './marvellous-course-list.component.html',
  styleUrls: ['./marvellous-course-list.component.css']
})
export class MarvellousCourseListComponent implements OnInit {

  course: any = [];
  constructor(private _batchservices: MarvellousCourseService) {

  }

  ngOnInit(): void {
    this.course = this._batchservices.getBatchDetails();
  }

}
