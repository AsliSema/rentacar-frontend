import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModelFormComponent } from './update-model-form.component';

describe('UpdateModelFormComponent', () => {
  let component: UpdateModelFormComponent;
  let fixture: ComponentFixture<UpdateModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateModelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
