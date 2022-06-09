import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeWidgetComponent } from './currency-exchange-widget.component';

describe('CurrencyExchangeWidgetComponent', () => {
  let component: CurrencyExchangeWidgetComponent;
  let fixture: ComponentFixture<CurrencyExchangeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangeWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
