import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListTableComponent } from './cars-list-table.component';

describe('CarsListTableComponent', () => {
  let component: CarsListTableComponent;
  let fixture: ComponentFixture<CarsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
