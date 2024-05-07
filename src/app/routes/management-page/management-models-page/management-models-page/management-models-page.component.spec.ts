import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModelsPageComponent } from './management-models-page.component';

describe('ManagementModelsPageComponent', () => {
  let component: ManagementModelsPageComponent;
  let fixture: ComponentFixture<ManagementModelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementModelsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementModelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
