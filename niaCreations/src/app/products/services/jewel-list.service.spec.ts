import { TestBed } from '@angular/core/testing';

import { JewelListService } from './jewel-list.service';

describe('JewelListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JewelListService = TestBed.get(JewelListService);
    expect(service).toBeTruthy();
  });
});
