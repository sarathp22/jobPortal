import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerManageApplicationComponent } from './employer-manage-application.component';

describe('EmployerManageApplicationComponent', () => {
  let component: EmployerManageApplicationComponent;
  let fixture: ComponentFixture<EmployerManageApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerManageApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerManageApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
