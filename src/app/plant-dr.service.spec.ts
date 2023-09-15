import { TestBed } from '@angular/core/testing';

import { PlantDrService } from './plant-dr.service';

describe('PlantDrService', () => {
  let service: PlantDrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantDrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
