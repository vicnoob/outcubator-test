import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSpinner } from '@angular/material/progress-spinner';
import { CurrencyExchangeWidgetService } from './currency-exchange-widget.service';

@Component({
  selector: 'app-currency-exchange-widget',
  templateUrl: './currency-exchange-widget.component.html',
  styleUrls: ['./currency-exchange-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CurrencyExchangeWidgetComponent implements OnInit {
  currentAmount = 5641.43;
  currentAmountDisplay: number;
  reactiveForm: FormGroup;
  exchangeRate: {
    [key: string]: number;
  };
  spinner = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
  });

  constructor(
    private formBuilder: FormBuilder,
    private currencyExchangeWidgetService: CurrencyExchangeWidgetService,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    if (!this.spinner.hasAttached()) {
      this.spinner.attach(new ComponentPortal(MatSpinner));
    }
    this.reactiveForm = this.formBuilder.group({
      sendCurrency: ['USD'],
      receiveCurrency: ['EUR'],
      sendAmount: [null],
      receiveAmount: [{ value: null, disabled: true }],
    });
    this.currencyExchangeWidgetService.getExchangeRate().subscribe((rate) => {
      this.exchangeRate = rate;
      this.currentAmountDisplay =
        this.currentAmount *
        this.exchangeRate[this.reactiveForm.get('sendCurrency')?.value];
      this.setSendAmountValidator();
      this.spinner.detach();
    });

    this.reactiveForm.get('sendCurrency').valueChanges.subscribe((val) => {
      this.currentAmountDisplay = this.currentAmount * this.exchangeRate[val];
      this.setSendAmountValidator();
      this.reactiveForm.get('sendAmount').patchValue(null);
    });

    this.reactiveForm.get('sendAmount').valueChanges.subscribe(() => {
      this.reactiveForm.get('receiveAmount').patchValue(this.receiveAmount);
    });
  }

  private setSendAmountValidator(): void {
    this.reactiveForm
      .get('sendAmount')
      .setValidators(Validators.max(this.currentAmountDisplay));
  }

  public get receiveAmount(): number {
    const toUsd = this.sendAmount / this.exchangeRate[this.sendCurrency] || 0;
    const feeToUsd = this.exchangeFee / this.exchangeRate[this.sendCurrency];
    return (toUsd - feeToUsd) * this.exchangeRate[this.receiveCurrency];
  }

  public get receiveCurrency(): string {
    return this.reactiveForm.get('receiveCurrency')?.value;
  }

  public get sendCurrency(): string {
    return this.reactiveForm.get('sendCurrency')?.value;
  }

  public get sendAmount(): number {
    return this.reactiveForm.get('sendAmount')?.value;
  }

  public get exchangeFee(): number {
    if (!this.exchangeRate) {
      return 0;
    }
    const toUsd = this.sendAmount / this.exchangeRate[this.sendCurrency] || 0;
    let fee = 0;
    if (toUsd < 10) {
      fee = 0.5;
    } else if (toUsd < 100) {
      fee = 0.8;
    } else {
      fee = 1.1;
    }
    return (this.sendAmount * fee) / 100;
  }
}
