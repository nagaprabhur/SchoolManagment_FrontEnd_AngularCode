import { TestBed, inject } from '@angular/core/testing';

import { PerformancereportService } from './performancereport.service';

describe('PerformancereportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerformancereportService]
    });
  });

  it('should be created', inject([PerformancereportService], (service: PerformancereportService) => {
    expect(service).toBeTruthy();
  }));
});
