import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobApplicantListComponent } from './admin-job-applicant-list.component';

describe('AdminJobApplicantListComponent', () => {
  let component: AdminJobApplicantListComponent;
  let fixture: ComponentFixture<AdminJobApplicantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobApplicantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
