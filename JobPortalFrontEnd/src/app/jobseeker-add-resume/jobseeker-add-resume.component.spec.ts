import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerAddResumeComponent } from './jobseeker-add-resume.component';

describe('JobseekerAddResumeComponent', () => {
  let component: JobseekerAddResumeComponent;
  let fixture: ComponentFixture<JobseekerAddResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerAddResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerAddResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
