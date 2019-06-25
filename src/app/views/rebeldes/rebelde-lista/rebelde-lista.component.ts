import { Component, OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { Rebelde } from '../../../models/rebelde';
import { RebeldesService } from '../../../rebeldes.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Localizacao } from './../../../models/localizacao';

declare let $: any;

@Component({
  selector: 'app-rebelde-lista',
  templateUrl: './rebelde-lista.component.html',
  styleUrls: ['./rebelde-lista.component.scss']
})
export class RebeldeListaComponent implements OnInit {

  rebeldes: Rebelde[];
  fModal: any = {
    titulo: '',
    colunas: [],
    campos: [],
    rebelde: '',
    itens: []
  };
  constructor(
    private service: RebeldesService,
    private message: MensagensService) { }

  ngOnInit() {
    this.service.listagem().subscribe((dados: any) => {
      $(document).ready(() => {
        $('#dataTable').DataTable({
          language: {
            url: './assets/datatables_language.json'
          }
        });
      });
      this.rebeldes = dados;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }

  getInventario(rebelde: number) {
    this.fModal.titulo = 'Inventário';
    this.fModal.colunas = [];
    this.fModal.campos = [];
    this.fModal.colunas.push('Item');
    this.fModal.colunas.push('Quantidade');
    this.fModal.campos.push('item');
    this.fModal.campos.push('quantidade');
    this.service.pegar(rebelde).subscribe(dados => {
      this.fModal.rebelde = dados.nome;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
    this.service.getInventario(rebelde).subscribe(dados => {
      this.fModal.itens = dados;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }

  getLocalizacao(rebelde: number) {
    this.fModal.titulo = 'Localizações';
    this.fModal.colunas = [];
    this.fModal.campos = [];
    this.fModal.colunas.push('Nome Base');
    this.fModal.colunas.push('Latitude');
    this.fModal.colunas.push('Longitude');
    this.fModal.campos.push('nomeBase');
    this.fModal.campos.push('latitude');
    this.fModal.campos.push('longetude');
    this.service.pegar(rebelde).subscribe(dados => {
      this.fModal.rebelde = dados.nome;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
    this.service.getLocalizacoes(rebelde).subscribe((dados: Localizacao[]) => {
      dados.forEach(item => {
        item.latitude = parseFloat(item.latitude.toFixed(2));
        item.longetude = parseFloat(item.longetude.toFixed(2));
      });
      this.fModal.itens = dados;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }
}
