import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerBrowseJobsComponent } from './jobseeker-browse-jobs.component';

describe('JobseekerBrowseJobsComponent', () => {
  let component: JobseekerBrowseJobsComponent;
  let fixture: ComponentFixture<JobseekerBrowseJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerBrowseJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerBrowseJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
