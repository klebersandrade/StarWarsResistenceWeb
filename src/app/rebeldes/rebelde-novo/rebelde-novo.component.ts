import { Component, OnInit } from '@angular/core';
import { RebeldeAdd } from 'src/app/models/rebelde-novo';
import { RebeldesService } from '../rebeldes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rebelde-novo',
  templateUrl: './rebelde-novo.component.html',
  styleUrls: ['./rebelde-novo.component.scss']
})
export class RebeldeNovoComponent implements OnInit {

  rebelde: RebeldeAdd;
  itemAdd: any;
  invalid = false;
  invalidAdd = false;
  msgInvalid = '';
  constructor(
    private router: Router,
    private service: RebeldesService
  ) {
    this.rebelde = {
      rebelde: {
        genero: 'Selecione',
        idade: 0,
        nome: '',
        id: 0
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
    this.invalid = false;
    if (!this.rebelde.rebelde.idade) {
      this.rebelde.rebelde.idade = 0;
    }

    if (this.rebelde.rebelde.nome.trim() === '') {
      this.msgInvalid = 'Informe o nome!';
      return this.invalid = true;
    }

    if (this.rebelde.rebelde.genero === 'Selecione') {
      this.msgInvalid = 'Informe o gênero!';
      return this.invalid = true;
    }

    if (this.rebelde.rebelde.idade <= 0) {
      this.msgInvalid = 'Informe a idade!';
      return this.invalid = true;
    }

    if (this.rebelde.inventario.length === 0) {
      this.msgInvalid = 'Nenhum item informado!';
      return this.invalid = true;
    }

    this.service.salvar(this.rebelde).subscribe((retorno: RebeldeAdd) => {
      this.router.navigate(['rebeldes', 'lista']);
    });
  }

  addItem() {
    this.invalidAdd = false;
    if (!this.itemAdd.quantidade) {
      this.itemAdd.quantidade = 0;
    }

    if (this.itemAdd.item === 'Selecione') {
      this.msgInvalid = 'Informe o Item!';
      return this.invalidAdd = true;
    }

    if (this.itemAdd.quantidade <= 0) {
      this.msgInvalid = 'Informe a quantidade!';
      return this.invalidAdd = true;
    }

    const item = this.rebelde.inventario.find(x => x.item === this.itemAdd.item);
    if (item) {
      item.quantidade += parseInt(this.itemAdd.quantidade);
    } else {
      this.rebelde.inventario.push({
        item: this.itemAdd.item,
        quantidade: parseInt(this.itemAdd.quantidade)
      });
    }
  }

}
