import { TestBed } from '@angular/core/testing';

import { CardComponentLoaderService } from './card-component-loader.service';

describe('CardComponentLoaderService', () => {
  let service: CardComponentLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardComponentLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
