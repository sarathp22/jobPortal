import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerBrowseCategoriesComponent } from './jobseeker-browse-categories.component';

describe('JobseekerBrowseCategoriesComponent', () => {
  let component: JobseekerBrowseCategoriesComponent;
  let fixture: ComponentFixture<JobseekerBrowseCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerBrowseCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerBrowseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
