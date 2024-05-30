import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRentalFormComponent } from './update-rental-form.component';

describe('UpdateRentalFormComponent', () => {
  let component: UpdateRentalFormComponent;
  let fixture: ComponentFixture<UpdateRentalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRentalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
