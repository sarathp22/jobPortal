import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyApprovalComponent } from './admin-company-approval.component';

describe('AdminCompanyApprovalComponent', () => {
  let component: AdminCompanyApprovalComponent;
  let fixture: ComponentFixture<AdminCompanyApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCompanyApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
