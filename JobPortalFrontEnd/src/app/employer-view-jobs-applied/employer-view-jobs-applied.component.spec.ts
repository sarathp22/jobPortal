import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerViewJobsAppliedComponent } from './employer-view-jobs-applied.component';

describe('EmployerViewJobsAppliedComponent', () => {
  let component: EmployerViewJobsAppliedComponent;
  let fixture: ComponentFixture<EmployerViewJobsAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerViewJobsAppliedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerViewJobsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
