import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ChartsModule } from 'ng2-charts';

import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { RebeldesModule } from './views/rebeldes/rebeldes.module';
import { NegociacaoModule } from './views/negociacao/negociacao.module';
import { DirectivesModule } from './directives/directives.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './template/topbar/topbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    RebeldesModule,
    NegociacaoModule,

    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    ChartsModule
  ],
  exports: [
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
