import { TestBed } from '@angular/core/testing';

import { HostLocationService } from './host-location.service';

describe('HostLocationService', () => {
  let service: HostLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
