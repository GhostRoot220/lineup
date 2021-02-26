import { TestBed } from '@angular/core/testing';

import { MyutilsService } from './myutils.service';

describe('MyutilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyutilsService = TestBed.get(MyutilsService);
    expect(service).toBeTruthy();
  });
});
