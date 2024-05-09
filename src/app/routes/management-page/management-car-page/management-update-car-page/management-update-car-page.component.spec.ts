import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUpdateCarPageComponent } from './management-update-car-page.component';

describe('ManagementUpdateCarPageComponent', () => {
  let component: ManagementUpdateCarPageComponent;
  let fixture: ComponentFixture<ManagementUpdateCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementUpdateCarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementUpdateCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
