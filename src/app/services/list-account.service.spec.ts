import { TestBed } from '@angular/core/testing';

import { ListAccountService } from './list-account.service';

describe('ListAccountService', () => {
  let service: ListAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
