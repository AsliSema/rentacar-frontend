import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentalsFormComponent } from './add-rentals-form.component';

describe('AddRentalsFormComponent', () => {
  let component: AddRentalsFormComponent;
  let fixture: ComponentFixture<AddRentalsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRentalsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRentalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
