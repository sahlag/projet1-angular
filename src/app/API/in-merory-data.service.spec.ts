import { TestBed, inject } from '@angular/core/testing';

import { InMeroryDataService } from './in-merory-data.service';

describe('InMeroryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMeroryDataService]
    });
  });

  it('should be created', inject([InMeroryDataService], (service: InMeroryDataService) => {
    expect(service).toBeTruthy();
  }));
});
