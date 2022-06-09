import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencySelectorComponent implements OnInit {
  @Input() currency: FormControl;
  @Input() currentAmount: number;
  showing$: Subject<boolean> = new Subject();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.showing$.next(true);
  }

  public onToggleColorSelector(): void {
    this.showing$.next(true);
  }

  public setActiveCurrency(currency: string): void {
    this.showing$.next(false);

    if (!this.currency || !this.currency.patchValue) {
      return;
    }

    this.currency.patchValue(currency);
  }

  public close(): void {
    this.showing$.next(false);
  }

  public onAttached(): void {
    this.showing$.next(true);
  }
}
