import { TestBed } from '@angular/core/testing';

import { LedgerContactService } from './ledger-contact.service';

describe('LedgerContactService', () => {
  let service: LedgerContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedgerContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
