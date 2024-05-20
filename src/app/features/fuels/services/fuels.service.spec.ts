import { TestBed } from '@angular/core/testing';

import { FuelsService } from './fuels.service';

describe('FuelsService', () => {
  let service: FuelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
