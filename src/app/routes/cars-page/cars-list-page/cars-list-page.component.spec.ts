import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListPageComponent } from './cars-list-page.component';

describe('CarsListPageComponent', () => {
  let component: CarsListPageComponent;
  let fixture: ComponentFixture<CarsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
