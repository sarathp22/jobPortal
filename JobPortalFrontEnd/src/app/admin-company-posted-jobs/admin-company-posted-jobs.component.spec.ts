import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyPostedJobsComponent } from './admin-company-posted-jobs.component';

describe('AdminCompanyPostedJobsComponent', () => {
  let component: AdminCompanyPostedJobsComponent;
  let fixture: ComponentFixture<AdminCompanyPostedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCompanyPostedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyPostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
