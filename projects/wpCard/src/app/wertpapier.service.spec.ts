import { TestBed } from '@angular/core/testing';

import { WertpapierService } from './wertpapier.service';

describe('WertpapierService', () => {
  let service: WertpapierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WertpapierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
