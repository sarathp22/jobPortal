import { TestBed } from '@angular/core/testing';

import { JobseekerGuard } from './jobseeker.guard';

describe('JobseekerGuard', () => {
  let guard: JobseekerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobseekerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
