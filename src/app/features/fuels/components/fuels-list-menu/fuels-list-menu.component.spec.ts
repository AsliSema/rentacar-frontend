import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelsListMenuComponent } from './fuels-list-menu.component';

describe('FuelsListMenuComponent', () => {
  let component: FuelsListMenuComponent;
  let fixture: ComponentFixture<FuelsListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelsListMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuelsListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
