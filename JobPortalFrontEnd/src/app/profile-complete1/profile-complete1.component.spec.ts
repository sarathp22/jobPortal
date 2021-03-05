import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComplete1Component } from './profile-complete1.component';

describe('ProfileComplete1Component', () => {
  let component: ProfileComplete1Component;
  let fixture: ComponentFixture<ProfileComplete1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComplete1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComplete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
