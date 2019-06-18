import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { RebeldeRoutingModule } from './rebelde-routing.module';

import { RebeldeListaComponent } from './rebelde-lista/rebelde-lista.component';
import { RebeldeComponent } from './rebelde/rebelde.component';
import { RebeldeNovoComponent } from './rebelde-novo/rebelde-novo.component';
import { RebeldeEditarComponent } from './rebelde-editar/rebelde-editar.component';
import { RebeldeReportarComponent } from './rebelde-reportar/rebelde-reportar.component';
import { RebeldeLocalizarComponent } from './rebelde-localizar/rebelde-localizar.component';
import { NumberOnlyDirective } from '../diretivas/number-only.directive';

@NgModule({
  declarations: [
    RebeldeListaComponent,
    RebeldeComponent,
    RebeldeNovoComponent,
    RebeldeEditarComponent,
    RebeldeReportarComponent,
    RebeldeLocalizarComponent,
    NumberOnlyDirective
  ],
  imports: [
  CommonModule,
    RebeldeRoutingModule,
    FormsModule
  ],
  exports: [

  ]
})
export class RebeldesModule { }
