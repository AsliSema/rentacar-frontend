import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListBaseComponent } from './car-list-base.component';

describe('CarListBaseComponent', () => {
  let component: CarListBaseComponent;
  let fixture: ComponentFixture<CarListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
