import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsListTableComponent } from './models-list-table.component';

describe('ModelsListTableComponent', () => {
  let component: ModelsListTableComponent;
  let fixture: ComponentFixture<ModelsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
