import { TestBed } from '@angular/core/testing';

import { ListServeursService } from './list-serveurs.service';

describe('ListServeursService', () => {
  let service: ListServeursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServeursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
