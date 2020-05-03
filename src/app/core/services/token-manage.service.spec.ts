import { TestBed } from '@angular/core/testing';

import { TokenManageService } from './token-manage.service';

describe('TokenManageService', () => {
  let service: TokenManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
