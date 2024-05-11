import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUpdateUserPageComponent } from './management-update-user-page.component';

describe('ManagementUpdateUserPageComponent', () => {
  let component: ManagementUpdateUserPageComponent;
  let fixture: ComponentFixture<ManagementUpdateUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementUpdateUserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementUpdateUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
