import { ParametersService } from './../../servicios/parameters.service';
import { ProductosService } from './../../servicios/productos.service';
import { Producto } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrls: ['./licores.component.scss'],
})
export class LicoresComponent implements OnInit {

  listLic:Producto[]=[];
  listBag:Producto[]=[];
  
  @Input() product: Producto;

  constructor(private proSer: ProductosService,
              private paramSer: ParametersService) { }

  ngOnInit() {
    this.paramSer.$getListSource.subscribe(data=>{
      this.listBag = data;
    }).unsubscribe();
  }

  addProducto(item){
    this.listBag.push(item);
    this.paramSer.enviarList(this.listBag);
    console.log(this.listBag);
  }
}
