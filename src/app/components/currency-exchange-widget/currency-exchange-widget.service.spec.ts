import { TestBed } from '@angular/core/testing';

import { CurrencyExchangeWidgetService } from './currency-exchange-widget.service';

describe('CurrencyExchangeWidgetService', () => {
  let service: CurrencyExchangeWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyExchangeWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
