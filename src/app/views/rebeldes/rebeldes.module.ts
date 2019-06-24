import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RebeldeRoutingModule } from './rebelde-routing.module';

import { RebeldeListaComponent } from './rebelde-lista/rebelde-lista.component';
import { RebeldeComponent } from './rebelde/rebelde.component';
import { RebeldeNovoComponent } from './rebelde-novo/rebelde-novo.component';
import { RebeldeReportarComponent } from './rebelde-reportar/rebelde-reportar.component';
import { RebeldeLocalizarComponent } from './rebelde-localizar/rebelde-localizar.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [
    RebeldeListaComponent,
    RebeldeComponent,
    RebeldeNovoComponent,
    RebeldeReportarComponent,
    RebeldeLocalizarComponent
  ],
  imports: [
    CommonModule,
    RebeldeRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  exports: [
  ]
})
export class RebeldesModule { }
