import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPastRentalsComponent } from './user-past-rentals.component';

describe('UserPastRentalsComponent', () => {
  let component: UserPastRentalsComponent;
  let fixture: ComponentFixture<UserPastRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPastRentalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPastRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
