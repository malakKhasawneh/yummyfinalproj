import { TestBed } from '@angular/core/testing';

import { AllRestService } from './all-rest.service';

describe('AllRestService', () => {
  let service: AllRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
