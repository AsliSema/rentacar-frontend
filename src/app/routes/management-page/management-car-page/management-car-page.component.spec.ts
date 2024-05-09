import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCarPageComponent } from './management-car-page.component';

describe('ManagementCarPageComponent', () => {
  let component: ManagementCarPageComponent;
  let fixture: ComponentFixture<ManagementCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
