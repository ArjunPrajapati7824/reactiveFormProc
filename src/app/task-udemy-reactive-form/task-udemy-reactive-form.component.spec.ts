import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUdemyReactiveFormComponent } from './task-udemy-reactive-form.component';

describe('TaskUdemyReactiveFormComponent', () => {
  let component: TaskUdemyReactiveFormComponent;
  let fixture: ComponentFixture<TaskUdemyReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskUdemyReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskUdemyReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
