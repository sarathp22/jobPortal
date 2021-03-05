import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyJobDetailsComponent } from './admin-company-job-details.component';

describe('AdminCompanyJobDetailsComponent', () => {
  let component: AdminCompanyJobDetailsComponent;
  let fixture: ComponentFixture<AdminCompanyJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCompanyJobDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
