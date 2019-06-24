import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './number-only.directive';
import { DoubleDirective } from './double.directive';

@NgModule({
  declarations: [
    NumberOnlyDirective,
    DoubleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberOnlyDirective,
    DoubleDirective
  ]
})
export class DirectivesModule { }
