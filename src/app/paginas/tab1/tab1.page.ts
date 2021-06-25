import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/interfaces';
import { ParametersService } from '../../servicios/parameters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  type: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.type = 'cervezas';
  }

  abrirModalDirecciones(){

  }
}
