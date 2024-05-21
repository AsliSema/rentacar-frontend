import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetailPageComponent } from './model-detail-page.component';

describe('ModelDetailPageComponent', () => {
  let component: ModelDetailPageComponent;
  let fixture: ComponentFixture<ModelDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
