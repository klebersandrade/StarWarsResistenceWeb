import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDouble]'
})
export class DoubleDirective {
  @Input() decimalPlace: number;
  @Input() size: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('focus', ['$event'])
  onFocus(event: any) {
    if (!this.decimalPlace) {
      this.decimalPlace = 2;
    }

    if (this.el.nativeElement.maxLength < 0) {
      this.el.nativeElement.maxLength = 10;
    }
    this.el.nativeElement.select();
  }

  @HostListener('blur', ['$event'])
  onBlur(event: any) {
    if (this.el.nativeElement.value.trim().length <= 0) {
      this.el.nativeElement.value = '0';
    }
  }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let initalValue: string = this.el.nativeElement.value;

    initalValue = initalValue.replace('.', ',');

    if ((initalValue.match(new RegExp(',', 'g')) || []).length > 1) {
      initalValue = initalValue.substring(0, initalValue.length - 1);
    }

    if ((initalValue.match(new RegExp('-', 'g')) || []).length > 1) {
      initalValue = initalValue.substring(0, initalValue.length - 1);
    }

    if ((initalValue.match(new RegExp(',', 'g')) || []).length > 0) {
      if (initalValue.substring(initalValue.indexOf(',') + 1).length > this.decimalPlace) {
        initalValue = initalValue.substring(0, initalValue.length - 1);
      }
    }

    this.el.nativeElement.value = initalValue.replace(/[^0-9,.-]*/g, '');

    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
