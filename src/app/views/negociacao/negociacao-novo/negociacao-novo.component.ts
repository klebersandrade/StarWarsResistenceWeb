import { Component, OnInit } from '@angular/core';
import { NegociacaoAdd } from 'src/app/models/negociacaoAdd';
import { Rebelde } from 'src/app/models/rebelde';
import { RebeldesService } from '../../../rebeldes.service';
import { MensagensService } from './../../../services/mensagens.service';
import { Item } from 'src/app/models/item';
import { NumberOnlyDirective } from 'src/app/directives/number-only.directive';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-negociacao-novo',
  templateUrl: './negociacao-novo.component.html',
  styleUrls: ['./negociacao-novo.component.scss'],
  providers:[
    NumberOnlyDirective
  ]
})
export class NegociacaoNovoComponent implements OnInit {
  negociacao: NegociacaoAdd = {
    comprador: 0,
    vendedor: 0,
    itensComprador: [],
    itensVendedor: []
  };
  rebeldes: Rebelde[] = [];
  itemVenda: any = {
    item: 'Selecione',
    quantidade: 0
  };
  itemCompra: any = {
    item: 'Selecione',
    quantidade: 0
  };
  constructor(
    private router: Router,
    private service: RebeldesService,
    private message: MensagensService
  ) { }

  ngOnInit() {
    this.service.getRebeldes().subscribe((dados) => {
      this.rebeldes = dados;
    });
  }

  salvar() {
    if (this.negociacao.vendedor < 0) {
      return this.message.msgWarn('Atenção', 'Informe o Vendedor!');
    }

    if (this.negociacao.comprador < 0) {
      return this.message.msgWarn('Atenção', 'Informe o Comprador!');
    }

    if (this.negociacao.itensVendedor.length === 0) {
      return this.message.msgWarn('Atenção', 'Nenhum item do vendedor informado!');
    }

    if (this.negociacao.itensComprador.length === 0) {
      return this.message.msgWarn('Atenção', 'Nenhum item do comprador informado!');
    }

    this.service.negociacao(this.negociacao).subscribe((retorno: any) => {
      this.message.msgSuccess('Sucesso', 'Negociação salva com Sucesso!');
      this.router.navigate(['negociacoes', 'lista']);
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }

  addItemVenda() {
    if (!this.itemVenda.quantidade) {
      this.itemVenda.quantidade = 0;
    }

    if (this.itemVenda.item === 'Selecione') {
      return this.message.msgWarn('Atenção', 'Informe o Item!');
    }

    if (this.itemVenda.quantidade <= 0) {
      return this.message.msgWarn('Atenção', 'Informe a Quantidade!');
    }

    const item = this.negociacao.itensVendedor.find(x => x.item === this.itemVenda.item);
    if (item) {
      item.quantidade += parseInt(this.itemVenda.quantidade, 0);
    } else {
      this.negociacao.itensVendedor.push({
        item: this.itemVenda.item,
        quantidade: parseInt(this.itemVenda.quantidade, 0)
      });
    }
  }

  addItemCompra() {
    if (!this.itemCompra.quantidade) {
      this.itemCompra.quantidade = 0;
    }

    if (this.itemCompra.item === 'Selecione') {
      return this.message.msgWarn('Atenção', 'Informe o Item!');
    }

    if (this.itemCompra.quantidade <= 0) {
      return this.message.msgWarn('Atenção', 'Informe a Quantidade!');
    }

    const item = this.negociacao.itensComprador.find(x => x.item === this.itemCompra.item);
    if (item) {
      item.quantidade += parseInt(this.itemCompra.quantidade, 0);
    } else {
      this.negociacao.itensComprador.push({
        item: this.itemCompra.item,
        quantidade: parseInt(this.itemCompra.quantidade, 0)
      });
    }
  }

  deletaItemVenda(item: Item) {
    this.negociacao.itensVendedor.map((valor: Item, index: number, lista: Item[]) => {
      if (item.item === valor.item) {
        return this.negociacao.itensVendedor.splice(index, 1);
      }
    });
  }

  deletaItemCompra(item: Item) {
    this.negociacao.itensComprador.map((valor: Item, index: number, lista: Item[]) => {
      if (item.item === valor.item) {
        return this.negociacao.itensComprador.splice(index, 1);
      }
    });
  }

}
