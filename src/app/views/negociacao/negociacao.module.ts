import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NegociacaoComponent } from './negociacao/negociacao.component';
import { NegociacaoRoutingModule } from './negociacao-routing.module';
import { NegociacaoListaComponent } from './negociacao-lista/negociacao-lista.component';
import { NegociacaoNovoComponent } from './negociacao-novo/negociacao-novo.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [
    NegociacaoComponent,
    NegociacaoListaComponent,
    NegociacaoNovoComponent
  ],
  imports: [
    CommonModule,
    NegociacaoRoutingModule,
    FormsModule,
    DirectivesModule
  ]
})
export class NegociacaoModule { }
