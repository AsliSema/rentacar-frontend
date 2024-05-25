import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLicenseFormComponent } from './create-license-form.component';

describe('CreateLicenseFormComponent', () => {
  let component: CreateLicenseFormComponent;
  let fixture: ComponentFixture<CreateLicenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLicenseFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
