import { TestBed } from '@angular/core/testing';

import { LoginDBService } from './login-db.service';

describe('LoginDBService', () => {
  let service: LoginDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
