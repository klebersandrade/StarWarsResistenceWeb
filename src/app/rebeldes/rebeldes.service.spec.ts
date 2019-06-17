import { TestBed } from '@angular/core/testing';

import { RebeldesService } from './rebeldes.service';

describe('RebeldesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RebeldesService = TestBed.get(RebeldesService);
    expect(service).toBeTruthy();
  });
});
