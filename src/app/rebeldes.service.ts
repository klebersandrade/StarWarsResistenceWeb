import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Dashboard } from 'src/app/models/dashboard';
import { HttpClient } from '@angular/common/http';
import { Rebelde } from './models/rebelde';
import { RebeldeAdd } from './models/rebelde-novo';
import { Localizacao } from './models/localizacao';
import { TraidorAdd } from './models/traidorAdd';
import { Negociacao } from './models/negociacao';
import { NegociacaoAdd } from './models/negociacaoAdd';

@Injectable({
  providedIn: 'root'
})
export class RebeldesService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://192.168.0.143:8080/';

  pegar(id: any) {
    return this.http.get<Rebelde>(this.API + 'rebeldes/' + id);
  }

  listagem() {
    return this.http.get<Rebelde[]>(this.API + 'rebeldes');
  }

  salvar(rebeldeAdd: RebeldeAdd) {
    return this.http.post(this.API + 'rebeldes', rebeldeAdd);
  }

  setaLocalizacao(rebeldeId: number, local: Localizacao) {
    return this.http.post(this.API + 'rebeldes/' + rebeldeId + '/localizacoes', local);
  }

  getRebeldes() {
    return this.http.get<Rebelde[]>(this.API + 'getrebeldes');
  }

  delatar(traidorAdd: TraidorAdd) {
    return this.http.post(this.API + 'rebeldes/reporta_traidor', traidorAdd);
  }

  getNegociacoes() {
    return this.http.get<Negociacao[]>(this.API + 'rebeldes/negociacoes');
  }

  negociacao(negociacao: NegociacaoAdd) {
    return this.http.post(this.API + 'rebeldes/negociacoes', negociacao);
  }

  getInventario(rebeldeId: number) {
    return this.http.get<Item[]>(this.API + 'getinventario/' + rebeldeId);
  }

  getDashboard() {
    return this.http.get<Dashboard>(this.API + 'relatorios/dashboard');
  }

  getLocalizacoes(rebeldeId: number) {
    return this.http.get<Localizacao[]>(this.API + 'rebeldes/localizacoes/' + rebeldeId);
  }
}
