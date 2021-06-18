import { Component, OnInit } from '@angular/core';
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
    listCart:Producto[]=[];
    constructor(private proSer: ProductosService,private paramSer: ParametersService) { }
  
    ngOnInit() {
      this.cargarProductos();
      this.paramSer.$getListSource.subscribe(data=>{
        this.listCart = data;
  
      }).unsubscribe();
    }
  
    addProducto(item){
      this.listCart.push(item);
      console.log(this.listCart);
    }
    
    cargarProductos(){
      this.proSer.getProductos().subscribe(
        data => {
          console.log(data);
          this.listPro = data;
        }
      );
    }

}
