import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  urlFoto = '';

  constructor() { }

  ngOnInit() {
    this.urlFoto = 'https://randomuser.me/api/portraits/men/' + (Math.floor(Math.random() * 80) + 1) + '.jpg';
  }

}
