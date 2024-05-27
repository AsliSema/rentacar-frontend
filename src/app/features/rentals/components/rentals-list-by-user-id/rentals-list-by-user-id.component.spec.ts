import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsListByUserIdComponent } from './rentals-list-by-user-id.component';

describe('RentalsListByUserIdComponent', () => {
  let component: RentalsListByUserIdComponent;
  let fixture: ComponentFixture<RentalsListByUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalsListByUserIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalsListByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
