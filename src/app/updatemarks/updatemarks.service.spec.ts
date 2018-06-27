import { TestBed, inject } from '@angular/core/testing';

import { UpdatemarksService } from './updatemarks.service';

describe('UpdatemarksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatemarksService]
    });
  });

  it('should be created', inject([UpdatemarksService], (service: UpdatemarksService) => {
    expect(service).toBeTruthy();
  }));
});
