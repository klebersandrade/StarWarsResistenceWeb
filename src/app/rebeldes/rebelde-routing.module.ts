import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RebeldeComponent } from './rebelde/rebelde.component';
import { RebeldeListaComponent } from './rebelde-lista/rebelde-lista.component';
import { RebeldeNovoComponent } from './rebelde-novo/rebelde-novo.component';
import { RebeldeEditarComponent } from './rebelde-editar/rebelde-editar.component';
import { RebeldeLocalizarComponent } from './rebelde-localizar/rebelde-localizar.component';

const routes: Routes = [
  {
    path: 'rebeldes', component: RebeldeComponent, children: [
      { path: 'lista', component: RebeldeListaComponent },
      { path: 'novo', component: RebeldeNovoComponent },
      { path: 'editar', component: RebeldeEditarComponent },
      { path: 'reportar', component: RebeldeListaComponent },
      { path: 'localizar', component: RebeldeLocalizarComponent },
      { path: '', component: RebeldeListaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RebeldeRoutingModule { }
