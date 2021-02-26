import { TestBed } from '@angular/core/testing';

import { ShowtoastService } from './showtoast.service';

describe('ShowtoastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowtoastService = TestBed.get(ShowtoastService);
    expect(service).toBeTruthy();
  });
});
