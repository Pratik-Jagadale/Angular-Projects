import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousCourseDetailsComponent } from './marvellous-course-details.component';

describe('MarvellousCourseDetailsComponent', () => {
  let component: MarvellousCourseDetailsComponent;
  let fixture: ComponentFixture<MarvellousCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousCourseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
