import { TestBed } from '@angular/core/testing';

import { MarvellousCourseService } from './marvellous-course.service';

describe('MarvellousCourseService', () => {
  let service: MarvellousCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvellousCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
