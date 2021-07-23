import { TestBed } from '@angular/core/testing';

import { RestProfileService } from './rest-profile.service';

describe('RestProfileService', () => {
  let service: RestProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
