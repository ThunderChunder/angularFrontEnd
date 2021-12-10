import { TestBed } from '@angular/core/testing';

import { PageContentHttpClientService } from './page-content-http-client.service';

describe('PageContentHttpClientService', () => {
  let service: PageContentHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageContentHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
