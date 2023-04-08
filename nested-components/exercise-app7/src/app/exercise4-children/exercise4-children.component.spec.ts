import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4ChildrenComponent } from './exercise4-children.component';

describe('Exercise4ChildrenComponent', () => {
  let component: Exercise4ChildrenComponent;
  let fixture: ComponentFixture<Exercise4ChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise4ChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise4ChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
