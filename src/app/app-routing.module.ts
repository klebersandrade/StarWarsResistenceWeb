import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RebeldeListaComponent } from './rebeldes/rebelde-lista/rebelde-lista.component';

const routes: Routes = [
  {path: 'rebeldes', component: RebeldeListaComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
