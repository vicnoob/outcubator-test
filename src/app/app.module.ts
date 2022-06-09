import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyExchangeWidgetComponent } from './components/currency-exchange-widget/currency-exchange-widget.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { MatRippleModule } from '@angular/material/core';
import { CurrencySelectorPanelComponent } from './components/currency-selector-panel/currency-selector-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangeWidgetComponent,
    CurrencySelectorComponent,
    CurrencySelectorPanelComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    OverlayModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
