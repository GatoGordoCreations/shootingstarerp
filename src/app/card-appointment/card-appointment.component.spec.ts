import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAppointmentComponent } from './card-appointment.component';

describe('CardAppointmentComponent', () => {
  let component: CardAppointmentComponent;
  let fixture: ComponentFixture<CardAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
