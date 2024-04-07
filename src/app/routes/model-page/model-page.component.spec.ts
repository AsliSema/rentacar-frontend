import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPageComponent } from './model-page.component';

describe('ModelPageComponent', () => {
  let component: ModelPageComponent;
  let fixture: ComponentFixture<ModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
