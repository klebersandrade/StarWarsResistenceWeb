import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RebeldeComponent } from './rebelde/rebelde.component';
import { RebeldeListaComponent } from './rebelde-lista/rebelde-lista.component';
import { RebeldeNovoComponent } from './rebelde-novo/rebelde-novo.component';
import { RebeldeLocalizarComponent } from './rebelde-localizar/rebelde-localizar.component';
import { RebeldeReportarComponent } from './rebelde-reportar/rebelde-reportar.component';

const routes: Routes = [
  {
    path: 'rebeldes', component: RebeldeComponent, children: [
      { path: 'lista', component: RebeldeListaComponent },
      { path: 'novo', component: RebeldeNovoComponent },
      { path: 'reportar/:id', component: RebeldeReportarComponent },
      { path: 'localizar/:id', component: RebeldeLocalizarComponent },
      { path: '', component: RebeldeListaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RebeldeRoutingModule { }
