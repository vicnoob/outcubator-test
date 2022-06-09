import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectorPanelComponent } from './currency-selector-panel.component';

describe('CurrencySelectorPanelComponent', () => {
  let component: CurrencySelectorPanelComponent;
  let fixture: ComponentFixture<CurrencySelectorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencySelectorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySelectorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
