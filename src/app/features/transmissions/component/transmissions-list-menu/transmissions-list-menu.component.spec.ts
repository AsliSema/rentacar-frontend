import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionsListMenuComponent } from './transmissions-list-menu.component';

describe('TransmissionsListMenuComponent', () => {
  let component: TransmissionsListMenuComponent;
  let fixture: ComponentFixture<TransmissionsListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmissionsListMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransmissionsListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
