import { Component, OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { Rebelde } from '../../../models/rebelde';
import { RebeldesService } from '../../../rebeldes.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { HttpErrorResponse } from '@angular/common/http';

declare let $: any;

@Component({
  selector: 'app-rebelde-lista',
  templateUrl: './rebelde-lista.component.html',
  styleUrls: ['./rebelde-lista.component.scss']
})
export class RebeldeListaComponent implements OnInit {

  rebeldes: Rebelde[];
  inventario: any = {
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
    this.service.pegar(rebelde).subscribe(dados => {
      this.inventario.rebelde = dados.nome;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
    this.service.getInventario(rebelde).subscribe(dados => {
      this.inventario.itens = dados;
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }
}
