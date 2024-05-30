import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsListTableComponent } from './rentals-list-table.component';

describe('RentalsListTableComponent', () => {
  let component: RentalsListTableComponent;
  let fixture: ComponentFixture<RentalsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalsListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
