import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousCourseListComponent } from './marvellous-course-list.component';

describe('MarvellousCourseListComponent', () => {
  let component: MarvellousCourseListComponent;
  let fixture: ComponentFixture<MarvellousCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousCourseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
