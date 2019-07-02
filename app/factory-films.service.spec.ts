import { TestBed } from '@angular/core/testing';

import { FactoryFilmsService } from './factory-films.service';

describe('FactoryFilmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactoryFilmsService = TestBed.get(FactoryFilmsService);
    expect(service).toBeTruthy();
  });
});
