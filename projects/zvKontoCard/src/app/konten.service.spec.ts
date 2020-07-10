import { TestBed } from '@angular/core/testing';

import { KontenService } from './konten.service';

describe('KontenService', () => {
  let service: KontenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
