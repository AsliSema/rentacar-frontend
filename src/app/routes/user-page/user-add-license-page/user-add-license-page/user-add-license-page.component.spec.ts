import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddLicensePageComponent } from './user-add-license-page.component';

describe('UserAddLicensePageComponent', () => {
  let component: UserAddLicensePageComponent;
  let fixture: ComponentFixture<UserAddLicensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddLicensePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddLicensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
