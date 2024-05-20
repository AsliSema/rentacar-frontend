import { TestBed } from '@angular/core/testing';

import { TransmissionsService } from './transmissions.service';

describe('TransmissionsService', () => {
  let service: TransmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
