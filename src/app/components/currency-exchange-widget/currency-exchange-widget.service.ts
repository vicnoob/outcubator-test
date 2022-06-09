import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeWidgetService {
  constructor() {}

  public getExchangeRate(): Observable<{
    [key: string]: number
  }> {
    return of({
      USD: 1,
      EUR: 0.815894,
      CAD: 1.204355,
      GBP: 0.70602,
      MXN: 19.88162,
      PLN: 3.66121,
    }).pipe(
      delay(500)
    );
  }
}
