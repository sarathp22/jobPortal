import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerJobDetailsComponent } from './jobseeker-job-details.component';

describe('JobseekerJobDetailsComponent', () => {
  let component: JobseekerJobDetailsComponent;
  let fixture: ComponentFixture<JobseekerJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerJobDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
