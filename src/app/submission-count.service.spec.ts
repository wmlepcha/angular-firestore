import { TestBed } from '@angular/core/testing';

import { SubmissionCountService } from './submission-count.service';

describe('SubmissionCountService', () => {
  let service: SubmissionCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
