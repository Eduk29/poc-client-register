import { TestBed } from '@angular/core/testing';

import { ContactTypesService } from './contact-types.service';

describe('ContactTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactTypesService = TestBed.get(ContactTypesService);
    expect(service).toBeTruthy();
  });
});
