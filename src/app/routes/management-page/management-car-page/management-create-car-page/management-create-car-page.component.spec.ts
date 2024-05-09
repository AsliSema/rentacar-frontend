import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCreateCarPageComponent } from './management-create-car-page.component';

describe('ManagementCreateCarPageComponent', () => {
  let component: ManagementCreateCarPageComponent;
  let fixture: ComponentFixture<ManagementCreateCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCreateCarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCreateCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
