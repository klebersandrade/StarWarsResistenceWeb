import { Component, OnInit } from '@angular/core';
import { RebeldesService } from './../../rebeldes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MensagensService } from './../../services/mensagens.service';
import { Dashboard } from 'src/app/models/dashboard';

declare let Chart: any;
declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboard: Dashboard = {
    pontosPerdidos: 0,
    porcRebeldes: 0,
    porcTraidores: 0,
    qtdCadastrado: 0,
    qtdRebeldes: 0,
    qtdTraidores: 0,
    recursos: []
  };

  donutDados = [{
    data: []
  }];
  donutTitulos = [];
  donutTipo = 'doughnut';
  // backgroundColor = ['#4e73df', '#1cc88a'];
  // hoverBackgroundColor = ['#2e59d9', '#17a673'];
  // hoverBorderColor = 'rgba(234, 236, 244, 1)';
  donutOptions = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  };

  constructor(
    private service: RebeldesService,
    private message: MensagensService
  ) { }

  ngOnInit() {
    this.service.getDashboard().subscribe(dados => {
      console.log(dados);
      this.donutDados = [];
      let dado: any = {};
      dado.data = []
      dado.data.push(dados.qtdRebeldes);
      dado.data.push(dados.qtdTraidores);
      dado.backgroundColor = ['#4e73df', '#E74A3B'];
      dado.hoverBackgroundColor = ['#2e59d9', '#cc291a'];
      dado.hoverBorderColor = 'rgba(234, 236, 244, 1)';
      this.donutDados.push(dado);
      this.donutTitulos = [];
      this.donutTitulos.push('Rebeldes', 'Traidores');
      this.dashboard = dados;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }

}
