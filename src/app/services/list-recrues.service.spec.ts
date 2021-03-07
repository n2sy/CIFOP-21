import { TestBed } from '@angular/core/testing';

import { ListRecruesService } from './list-recrues.service';

describe('ListRecruesService', () => {
  let service: ListRecruesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRecruesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
