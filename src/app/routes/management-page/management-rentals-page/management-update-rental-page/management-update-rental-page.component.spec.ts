import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUpdateRentalPageComponent } from './management-update-rental-page.component';

describe('ManagementUpdateRentalPageComponent', () => {
  let component: ManagementUpdateRentalPageComponent;
  let fixture: ComponentFixture<ManagementUpdateRentalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementUpdateRentalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementUpdateRentalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
