import { TestBed } from '@angular/core/testing';

import { StateDistrictService } from './state-district.service';

describe('StateDistrictService', () => {
  let service: StateDistrictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateDistrictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
