import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBrowseJobsComponent } from './general-browse-jobs.component';

describe('GeneralBrowseJobsComponent', () => {
  let component: GeneralBrowseJobsComponent;
  let fixture: ComponentFixture<GeneralBrowseJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralBrowseJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralBrowseJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
