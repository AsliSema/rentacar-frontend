import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsListMenuComponent } from './brands-list-menu.component';

describe('BrandsListMenuComponent', () => {
  let component: BrandsListMenuComponent;
  let fixture: ComponentFixture<BrandsListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsListMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandsListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
