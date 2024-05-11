import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUsersPageComponent } from './management-users-page.component';

describe('ManagementUsersPageComponent', () => {
  let component: ManagementUsersPageComponent;
  let fixture: ComponentFixture<ManagementUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementUsersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
