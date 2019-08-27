import { TestBed } from '@angular/core/testing';

import { SpendingsService } from './spendings.service';

describe('SpendingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpendingsService = TestBed.get(SpendingsService);
    expect(service).toBeTruthy();
  });
});
