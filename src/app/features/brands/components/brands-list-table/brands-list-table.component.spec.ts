import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsListTableComponent } from './brands-list-table.component';

describe('BrandsListTableComponent', () => {
  let component: BrandsListTableComponent;
  let fixture: ComponentFixture<BrandsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
