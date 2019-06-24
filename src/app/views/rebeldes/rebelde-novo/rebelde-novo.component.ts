import { Component, OnInit } from '@angular/core';
import { RebeldeAdd } from 'src/app/models/rebelde-novo';
import { RebeldesService } from '../../../rebeldes.service';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-rebelde-novo',
  templateUrl: './rebelde-novo.component.html',
  styleUrls: ['./rebelde-novo.component.scss']
})
export class RebeldeNovoComponent implements OnInit {

  rebelde: RebeldeAdd;
  itemAdd: any;

  constructor(
    private router: Router,
    private service: RebeldesService,
    private message: MensagensService
  ) {
    this.rebelde = {
      rebelde: {
        genero: 'Selecione',
        idade: 0,
        nome: '',
        id: 0,
        traidor: false
      },
      inventario: []
    };

    this.itemAdd = {
      item: 'Selecione',
      quantidade: 0
    };
  }

  ngOnInit() {
  }

  salvar() {
    if (!this.rebelde.rebelde.idade) {
      this.rebelde.rebelde.idade = 0;
    }

    if (this.rebelde.rebelde.nome.trim() === '') {
      return this.message.msgWarn('Atenção', 'Informe o nome!');
    }

    if (this.rebelde.rebelde.genero === 'Selecione') {
      return this.message.msgWarn('Atenção', 'Informe o gênero!');
    }

    if (this.rebelde.rebelde.idade <= 0) {
      return this.message.msgWarn('Atenção', 'Informe a idade!');
    }

    if (this.rebelde.inventario.length === 0) {
      return this.message.msgWarn('Atenção', 'Nenhum item informado!');
    }

    this.service.salvar(this.rebelde).subscribe((retorno: RebeldeAdd) => {
      this.message.msgSuccess('Sucesso', 'Rebelde salvo com Sucesso!');
      this.router.navigate(['rebeldes', 'lista']);
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }

  addItem() {
    if (!this.itemAdd.quantidade) {
      this.itemAdd.quantidade = 0;
    }

    if (this.itemAdd.item === 'Selecione') {
      return this.message.msgWarn('Atenção', 'Informe o Item!');
    }

    if (this.itemAdd.quantidade <= 0) {
      return this.message.msgWarn('Atenção', 'Informe a Quantidade!');
    }

    const item = this.rebelde.inventario.find(x => x.item === this.itemAdd.item);
    if (item) {
      item.quantidade += this.itemAdd.quantidade;
    } else {
      this.rebelde.inventario.push({
        item: this.itemAdd.item,
        quantidade: this.itemAdd.quantidade
      });
    }
  }

  deletaItem(item: Item) {
    this.rebelde.inventario.map((valor: Item, index: number, lista: Item[]) => {
      if (item.item === valor.item) {
        return this.rebelde.inventario.splice(index, 1);
      }
    });
  }

}
