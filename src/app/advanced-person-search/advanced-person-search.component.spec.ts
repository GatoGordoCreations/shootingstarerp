import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPersonSearchComponent } from './advanced-person-search.component';

describe('AdvancedPersonSearchComponent', () => {
  let component: AdvancedPersonSearchComponent;
  let fixture: ComponentFixture<AdvancedPersonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedPersonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedPersonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
