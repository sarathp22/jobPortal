import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerChangePasswordComponent } from './jobseeker-change-password.component';

describe('JobseekerChangePasswordComponent', () => {
  let component: JobseekerChangePasswordComponent;
  let fixture: ComponentFixture<JobseekerChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
