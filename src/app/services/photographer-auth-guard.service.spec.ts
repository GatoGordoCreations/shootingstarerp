import { TestBed } from '@angular/core/testing';

import { PhotographerAuthGuardService } from './photographer-auth-guard.service';

describe('PhotographerAuthGuardService', () => {
  let service: PhotographerAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotographerAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
