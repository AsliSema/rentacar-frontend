import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUpdateModelPageComponent } from './management-update-model-page.component';

describe('ManagementUpdateModelPageComponent', () => {
  let component: ManagementUpdateModelPageComponent;
  let fixture: ComponentFixture<ManagementUpdateModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementUpdateModelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementUpdateModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
