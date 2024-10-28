import { TestBed } from '@angular/core/testing';

import { VideogamesDbService } from './videogames-db.service';

describe('VideogamesDbService', () => {
  let service: VideogamesDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogamesDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
