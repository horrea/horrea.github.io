import { TestBed } from '@angular/core/testing';

import { RexStoreService } from './rex-store.service';

describe('RexStoreService', () => {
  let service: RexStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RexStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
