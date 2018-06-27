import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenYearPerformanceComponent } from './given-year-performance.component';

describe('GivenYearPerformanceComponent', () => {
  let component: GivenYearPerformanceComponent;
  let fixture: ComponentFixture<GivenYearPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivenYearPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenYearPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
