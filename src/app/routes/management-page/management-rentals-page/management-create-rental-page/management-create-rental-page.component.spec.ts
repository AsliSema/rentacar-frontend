import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCreateRentalPageComponent } from './management-create-rental-page.component';

describe('ManagementCreateRentalPageComponent', () => {
  let component: ManagementCreateRentalPageComponent;
  let fixture: ComponentFixture<ManagementCreateRentalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCreateRentalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCreateRentalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
