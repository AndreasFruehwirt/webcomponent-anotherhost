import { TestBed } from '@angular/core/testing';

import { PageEventListenerService } from './page-event-listener.service';

describe('PageEventListenerService', () => {
  let service: PageEventListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageEventListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
