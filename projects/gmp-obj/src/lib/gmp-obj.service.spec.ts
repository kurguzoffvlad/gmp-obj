import { TestBed } from '@angular/core/testing';

import { GmpObjService } from './gmp-obj.service';

describe('GmpObjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpObjService = TestBed.get(GmpObjService);
    expect(service).toBeTruthy();
  });
});
