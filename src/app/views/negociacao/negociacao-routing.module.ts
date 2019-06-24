import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegociacaoComponent } from './negociacao/negociacao.component';
import { NegociacaoListaComponent } from './negociacao-lista/negociacao-lista.component';
import { NegociacaoNovoComponent } from './negociacao-novo/negociacao-novo.component';

const routes: Routes = [
  {
    path: 'negociacoes', component: NegociacaoComponent, children: [
      { path: 'lista', component: NegociacaoListaComponent },
      { path: 'novo', component: NegociacaoNovoComponent },
      { path: '', component: NegociacaoListaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class NegociacaoRoutingModule { }
