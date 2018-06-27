import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemarksComponent } from './updatemarks.component';

describe('UpdatemarksComponent', () => {
  let component: UpdatemarksComponent;
  let fixture: ComponentFixture<UpdatemarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
