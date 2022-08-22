import { TestBed } from '@angular/core/testing';

import { OrgHasStaffService } from './org-has-staff.service';

describe('OrgHasStaffService', () => {
  let service: OrgHasStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgHasStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
