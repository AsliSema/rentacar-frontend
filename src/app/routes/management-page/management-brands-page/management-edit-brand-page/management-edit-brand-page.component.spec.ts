import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEditBrandPageComponent } from './management-edit-brand-page.component';

describe('ManagementEditBrandPageComponent', () => {
  let component: ManagementEditBrandPageComponent;
  let fixture: ComponentFixture<ManagementEditBrandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementEditBrandPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementEditBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
