import { TestBed } from '@angular/core/testing';

import { SearchCallService } from './search-call.service';

describe('SearchCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCallService = TestBed.get(SearchCallService);
    expect(service).toBeTruthy();
  });
});
