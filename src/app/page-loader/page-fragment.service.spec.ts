import { TestBed } from '@angular/core/testing';

import { PageFragmentService } from './page-fragment.service';

describe('PageFragmentService', () => {
  let service: PageFragmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageFragmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
