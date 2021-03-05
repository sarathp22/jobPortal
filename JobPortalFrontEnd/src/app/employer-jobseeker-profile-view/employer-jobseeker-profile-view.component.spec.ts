import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerJobseekerProfileViewComponent } from './employer-jobseeker-profile-view.component';

describe('EmployerJobseekerProfileViewComponent', () => {
  let component: EmployerJobseekerProfileViewComponent;
  let fixture: ComponentFixture<EmployerJobseekerProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerJobseekerProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerJobseekerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
