import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBrandsPageComponent } from './management-brands-page.component';

describe('ManagementBrandsPageComponent', () => {
  let component: ManagementBrandsPageComponent;
  let fixture: ComponentFixture<ManagementBrandsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementBrandsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementBrandsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
