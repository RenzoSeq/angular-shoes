import { TestBed } from '@angular/core/testing';

import { ShoeCartService } from './shoe-cart.service';

describe('ShoeCartService', () => {
  let service: ShoeCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
