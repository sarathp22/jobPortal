import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComplete2Component } from './profile-complete2.component';

describe('ProfileComplete2Component', () => {
  let component: ProfileComplete2Component;
  let fixture: ComponentFixture<ProfileComplete2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComplete2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComplete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
