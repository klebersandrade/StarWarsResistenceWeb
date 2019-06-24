import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RebeldeListaComponent } from './views/rebeldes/rebelde-lista/rebelde-lista.component';
import { NegociacaoComponent } from './views/negociacao/negociacao/negociacao.component';

const routes: Routes = [
  {path: 'rebeldes', component: RebeldeListaComponent},
  {path: 'negociacoes', component: NegociacaoComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
