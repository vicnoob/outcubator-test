import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencySelectorComponent implements OnInit {
  @Input() currency: FormControl;
  @Input() currentAmount: number;
  showing$: Subject<boolean> = new Subject();
  positions = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.showing$.next(true);
  }

  get content() {
    return this.elementRef.nativeElement;
  }

  get contentWidth(): number {
    return this.content.getBoundingClientRect().width;
  }

  
  onToggleColorSelector() {
    this.showing$.next(true);
  }

  setActiveCurrency(currency: string) {
    this.showing$.next(false);

    if (!this.currency || !this.currency.patchValue) {
      return;
    }

    this.currency.patchValue(currency);
  }

  close() {
    this.showing$.next(false);
  }

  onAttached() {
    this.showing$.next(true);
  }

}
