import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rebelde } from './../models/rebelde';

@Injectable({
  providedIn: 'root'
})
export class RebeldesService {

  private readonly API = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listagem() {
    return this.http.get<Rebelde[]>(this.API + 'rebeldes');
  }
}
