import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidcompComponent } from './invalidcomp.component';

describe('InvalidcompComponent', () => {
  let component: InvalidcompComponent;
  let fixture: ComponentFixture<InvalidcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
