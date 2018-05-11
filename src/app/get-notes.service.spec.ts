import { TestBed, inject } from '@angular/core/testing';

import { GetNotesService } from './get-notes.service';

describe('GetNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNotesService]
    });
  });

  it('should be created', inject([GetNotesService], (service: GetNotesService) => {
    expect(service).toBeTruthy();
  }));
});
