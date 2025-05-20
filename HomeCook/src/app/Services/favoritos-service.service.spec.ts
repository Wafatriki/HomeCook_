import { TestBed } from '@angular/core/testing';

import { FavoritosServiceService } from './favoritos-service.service';

describe('FavoritosServiceService', () => {
  let service: FavoritosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
