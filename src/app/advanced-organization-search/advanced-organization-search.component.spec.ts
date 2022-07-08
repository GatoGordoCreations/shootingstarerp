import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedOrganizationSearchComponent } from './advanced-organization-search.component';

describe('AdvancedOrganizationSearchComponent', () => {
  let component: AdvancedOrganizationSearchComponent;
  let fixture: ComponentFixture<AdvancedOrganizationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedOrganizationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedOrganizationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
