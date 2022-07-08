import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerNotesComponent } from './ledger-notes.component';

describe('LedgerNotesComponent', () => {
  let component: LedgerNotesComponent;
  let fixture: ComponentFixture<LedgerNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
