import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRentalsPageComponent } from './management-rentals-page.component';

describe('ManagementRentalsPageComponent', () => {
  let component: ManagementRentalsPageComponent;
  let fixture: ComponentFixture<ManagementRentalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementRentalsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementRentalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
