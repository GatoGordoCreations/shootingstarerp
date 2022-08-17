import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNotesComponent } from './popup-notes.component';

describe('PopupNotesComponent', () => {
  let component: PopupNotesComponent;
  let fixture: ComponentFixture<PopupNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
