import { TestBed } from '@angular/core/testing';

import { RexModelService } from './rex-model.service';

describe('RexModelService', () => {
  let service: RexModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RexModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
