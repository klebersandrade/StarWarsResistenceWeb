import { Component, OnInit } from '@angular/core';
import { Negociacao } from 'src/app/models/negociacao';
import { RebeldesService } from '../../../rebeldes.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { HttpErrorResponse } from '@angular/common/http';

declare let $: any;

@Component({
  selector: 'app-negociacao-lista',
  templateUrl: './negociacao-lista.component.html',
  styleUrls: ['./negociacao-lista.component.scss']
})
export class NegociacaoListaComponent implements OnInit {

  negociacoes: Negociacao[];
  constructor(
    private service: RebeldesService,
    private message: MensagensService
  ) { }

  ngOnInit() {
    this.service.getNegociacoes().subscribe((dados: Negociacao[]) => {
      $(document).ready(() => {
        $('#dataTable').DataTable({
          language: {
            url: './assets/datatables_language.json'
          }
        });
      });
      this.negociacoes = dados;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }

}
