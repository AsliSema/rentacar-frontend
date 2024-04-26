import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListBaseComponent } from './brand-list-base.component';

describe('BrandListBaseComponent', () => {
  let component: BrandListBaseComponent;
  let fixture: ComponentFixture<BrandListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandListBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
