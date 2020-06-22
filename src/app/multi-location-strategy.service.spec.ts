import { TestBed } from '@angular/core/testing';

import { MultiLocationStrategyService } from './multi-location-strategy.service';

describe('MultiLocationStrategyService', () => {
  let service: MultiLocationStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiLocationStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
