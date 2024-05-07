import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsListBaseComponent } from './models-list-base.component';

describe('ModelsListBaseComponent', () => {
  let component: ModelsListBaseComponent;
  let fixture: ComponentFixture<ModelsListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsListBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
