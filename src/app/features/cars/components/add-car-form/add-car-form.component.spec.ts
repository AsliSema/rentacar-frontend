import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarFormComponent } from './add-car-form.component';

describe('AddCarFormComponent', () => {
  let component: AddCarFormComponent;
  let fixture: ComponentFixture<AddCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCarFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
