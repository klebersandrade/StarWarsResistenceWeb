import { Component, OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { Rebelde } from './../../models/rebelde';
import { RebeldesService } from './../rebeldes.service';

declare let $: any;

@Component({
  selector: 'app-rebelde-lista',
  templateUrl: './rebelde-lista.component.html',
  styleUrls: ['./rebelde-lista.component.scss']
})
export class RebeldeListaComponent implements OnInit {

  rebeldes: Rebelde[];
  constructor(private service: RebeldesService) {

  }

  ngOnInit() {
    this.service.listagem().subscribe((dados: any) => {
      $(document).ready(() => {
        $('#dataTable').DataTable({
          language: {
            url: './assets/datatables_language.json'
          }
        });
      });
      this.rebeldes = dados.content;
    });
  }
}
