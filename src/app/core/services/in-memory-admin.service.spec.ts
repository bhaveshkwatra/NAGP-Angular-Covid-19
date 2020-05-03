import { TestBed } from '@angular/core/testing';

import { InMemoryAdminService } from './in-memory-admin.service';

describe('InMemoryAdminService', () => {
  let service: InMemoryAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
