import { TestBed } from '@angular/core/testing';

import { ListPersonnesService } from './list-personnes.service';

describe('ListPersonnesService', () => {
  let service: ListPersonnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPersonnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
