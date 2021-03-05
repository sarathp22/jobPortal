import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerRegisterComponent } from './jobseeker-register.component';

describe('JobseekerRegisterComponent', () => {
  let component: JobseekerRegisterComponent;
  let fixture: ComponentFixture<JobseekerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
