import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCreateBrandPageComponent } from './management-create-brand-page.component';

describe('ManagementCreateBrandPageComponent', () => {
  let component: ManagementCreateBrandPageComponent;
  let fixture: ComponentFixture<ManagementCreateBrandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCreateBrandPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCreateBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
