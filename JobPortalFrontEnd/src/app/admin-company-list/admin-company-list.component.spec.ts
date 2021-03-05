import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyListComponent } from './admin-company-list.component';

describe('AdminCompanyListComponent', () => {
  let component: AdminCompanyListComponent;
  let fixture: ComponentFixture<AdminCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCompanyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
