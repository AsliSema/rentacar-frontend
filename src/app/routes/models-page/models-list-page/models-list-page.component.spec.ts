import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsListPageComponent } from './models-list-page.component';

describe('ModelsListPageComponent', () => {
  let component: ModelsListPageComponent;
  let fixture: ComponentFixture<ModelsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
