import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCreateUserPageComponent } from './management-create-user-page.component';

describe('ManagementCreateUserPageComponent', () => {
  let component: ManagementCreateUserPageComponent;
  let fixture: ComponentFixture<ManagementCreateUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCreateUserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCreateUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
