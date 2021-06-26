import { ProductosService } from './../../servicios/productos.service';
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
  listPro:Producto[]=[];
  listBag:Producto[]=[];
  textBuscar: string = "";

  constructor(private proSer: ProductosService) { }

  ngOnInit() {
    this.type = 'cervezas';
    this.cargarProductos();
  }

  cargarProductos(){
    this.proSer.getProductos().subscribe(
      data => {
        console.log(data);
        this.listPro = data;
      }
    );
  }

  buscarPro(event){
    this.textBuscar = event;
  }

  abrirModalDirecciones(){

  }
}
