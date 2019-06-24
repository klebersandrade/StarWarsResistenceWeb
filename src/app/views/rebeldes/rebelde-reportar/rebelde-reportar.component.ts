import { Component, OnInit, OnDestroy } from '@angular/core';
import { Rebelde } from 'src/app/models/rebelde';
import { TraidorAdd } from './../../../models/traidorAdd';
import { Subscription } from 'rxjs';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { RebeldesService } from './../../../rebeldes.service';

@Component({
  selector: 'app-rebelde-reportar',
  templateUrl: './rebelde-reportar.component.html',
  styleUrls: ['./rebelde-reportar.component.scss']
})
export class RebeldeReportarComponent implements OnInit, OnDestroy {
  routeInscricao: Subscription;
  rebeldes: Rebelde[] = [];
  traidorAdd: TraidorAdd = {
    delator: 0,
    motivo: '',
    rebelde: 0
  };
  rebelde: Rebelde = {
    genero: 'Masculino',
    id: 0,
    idade: 0,
    nome: '',
    traidor: false
  };
  constructor(
    private service: RebeldesService,
    private message: MensagensService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
          this.traidorAdd.rebelde = this.rebelde.id;
        });
      }
    );
    this.service.getRebeldes().subscribe((dados) => {
      this.rebeldes = dados;
    });
  }

  ngOnDestroy(): void {
    this.routeInscricao.unsubscribe();
  }

  salvar() {
    if (this.traidorAdd.delator <= 0) {
      return this.message.msgWarn('Atenção', 'O Delator não foi informado!');
    }

    this.service.delatar(this.traidorAdd).subscribe((retorno) => {
      this.message.msgSuccess('Sucesso', 'Rebelde reportado com Sucesso!');
      this.router.navigate(['rebeldes', 'lista']);
    }, (erro: HttpErrorResponse) => {
      this.message.msgErro('Erro', erro.error.message);
    });
  }

}
