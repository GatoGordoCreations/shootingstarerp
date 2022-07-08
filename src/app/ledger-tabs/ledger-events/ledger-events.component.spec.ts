import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerEventsComponent } from './ledger-events.component';

describe('LedgerEventsComponent', () => {
  let component: LedgerEventsComponent;
  let fixture: ComponentFixture<LedgerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
