import { TestBed } from '@angular/core/testing';

import { DocumentTypesService } from './document-types.service';

describe('DocumentTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentTypesService = TestBed.get(DocumentTypesService);
    expect(service).toBeTruthy();
  });
});
