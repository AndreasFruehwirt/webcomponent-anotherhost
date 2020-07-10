import { TestBed } from '@angular/core/testing';

import { MultipleTestService } from './multiple-test.service';

describe('MultipleTestService', () => {
  let service: MultipleTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
