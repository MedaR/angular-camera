import { TestBed } from '@angular/core/testing';

import { CapteurService } from './capteur.service';

describe('CapteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapteurService = TestBed.get(CapteurService);
    expect(service).toBeTruthy();
  });
});
