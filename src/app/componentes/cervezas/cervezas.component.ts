import { Component, Input, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/servicios/parameters.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from '../../interfaces/interfaces';
@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.scss'],
})
export class CervezasComponent implements OnInit {
  listPro:Producto[]=[];
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
