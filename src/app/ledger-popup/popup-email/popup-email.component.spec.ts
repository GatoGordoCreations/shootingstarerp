import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEmailComponent } from './popup-email.component';

describe('PopupEmailComponent', () => {
  let component: PopupEmailComponent;
  let fixture: ComponentFixture<PopupEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
