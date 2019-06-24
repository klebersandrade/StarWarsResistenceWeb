import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RebeldesService } from '../../../rebeldes.service';
import { Rebelde } from './../../../models/rebelde';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Subscription } from 'rxjs';
import { Localizacao } from './../../../models/localizacao';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rebelde-localizar',
  templateUrl: './rebelde-localizar.component.html',
  styleUrls: ['./rebelde-localizar.component.scss']
})
export class RebeldeLocalizarComponent implements OnInit, OnDestroy {
  routeInscricao: Subscription;
  rebelde: Rebelde = {
    genero: 'Masculino',
    id: 0,
    idade: 0,
    nome: '',
    traidor: false
  };

  local: Localizacao = {
    id: 0,
    latitude: 0,
    longetude: 0,
    nomeBase: ''
  };

  constructor(
    private message: MensagensService,
    private router: Router,
    private route: ActivatedRoute,
    private service: RebeldesService) { }

  ngOnInit() {
    this.routeInscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params.id;
        this.service.pegar(id).subscribe((dados: Rebelde) => {
          if (dados == null) {
            this.message.msgErro('Erro', 'Rebelde não encontrado!');
            this.router.navigate(['/rebeldes/lista']);
            return;
          }
          this.rebelde = dados;
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.routeInscricao.unsubscribe();
  }

  salvar() {
    if (!this.local.nomeBase || this.local.nomeBase.trim().length <= 0) {
      return this.message.msgWarn('Atenção', 'O Nome da Base não foi informado!');
    }

    if (!this.local.latitude || this.local.latitude === 0) {
      return this.message.msgWarn('Atenção', 'A Latitude não foi informada!');
    }

    if (!this.local.longetude || this.local.longetude === 0) {
      return this.message.msgWarn('Atenção', 'A Longetude não foi informada!');
    }
    this.local.latitude = parseFloat(this.local.latitude.toString());
    this.local.longetude = parseFloat(this.local.longetude.toString());

    this.service.setaLocalizacao(this.rebelde.id, this.local).subscribe((retorno: Localizacao) => {
      this.message.msgSuccess('Sucesso', 'Localização salva com Sucesso!');
      this.router.navigate(['rebeldes', 'lista']);
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }
}
