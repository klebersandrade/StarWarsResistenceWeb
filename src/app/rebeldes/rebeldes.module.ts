import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RebeldeRoutingModule } from './rebelde-routing.module';

import { RebeldeListaComponent } from './rebelde-lista/rebelde-lista.component';
import { RebeldeComponent } from './rebelde/rebelde.component';
import { RebeldeNovoComponent } from './rebelde-novo/rebelde-novo.component';
import { RebeldeEditarComponent } from './rebelde-editar/rebelde-editar.component';
import { RebeldeReportarComponent } from './rebelde-reportar/rebelde-reportar.component';
import { RebeldeLocalizarComponent } from './rebelde-localizar/rebelde-localizar.component';

@NgModule({
  declarations: [
    RebeldeListaComponent,
    RebeldeComponent,
    RebeldeNovoComponent,
    RebeldeEditarComponent,
    RebeldeReportarComponent,
    RebeldeLocalizarComponent
  ],
  imports: [
    CommonModule,
    RebeldeRoutingModule
  ],
  exports: [

  ]
})
export class RebeldesModule { }
