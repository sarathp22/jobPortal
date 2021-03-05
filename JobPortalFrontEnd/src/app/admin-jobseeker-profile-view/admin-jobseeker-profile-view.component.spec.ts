import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobseekerProfileViewComponent } from './admin-jobseeker-profile-view.component';

describe('AdminJobseekerProfileViewComponent', () => {
  let component: AdminJobseekerProfileViewComponent;
  let fixture: ComponentFixture<AdminJobseekerProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobseekerProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobseekerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
