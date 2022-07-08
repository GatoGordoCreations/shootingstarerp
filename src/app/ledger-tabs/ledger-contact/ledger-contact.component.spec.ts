import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerContactComponent } from './ledger-contact.component';

describe('LedgerContactComponent', () => {
  let component: LedgerContactComponent;
  let fixture: ComponentFixture<LedgerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
