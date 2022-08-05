import { TestBed } from '@angular/core/testing';

import { SalesAuthGuardService } from './sales-auth-guard.service';

describe('SalesAuthGuardService', () => {
  let service: SalesAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
