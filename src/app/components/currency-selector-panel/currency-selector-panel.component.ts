import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { CURRENCY_LIST } from '../currency-exchange-widget/currency-exchange-widget.constant';

@Component({
  selector: 'app-currency-selector-panel',
  templateUrl: './currency-selector-panel.component.html',
  styleUrls: ['./currency-selector-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencySelectorPanelComponent implements OnInit {
  @Input() currentCurrency: string;
  @Output() currencyChanged: EventEmitter<string> = new EventEmitter<string>();

  currencyList = CURRENCY_LIST;
  constructor() { }

  ngOnInit(): void {
  }

  currencyChange(currency: string) {
    this.currencyChanged.emit(currency);
  }
}
