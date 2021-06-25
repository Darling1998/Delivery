import { Router } from '@angular/router';
import { Producto, IDetallePedido } from './../../interfaces/interfaces';
import { ParametersService } from './../../servicios/parameters.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  list: Producto[] = [];
  listBagRef: IDetallePedido[]=[];

  constructor(private listPedido: ParametersService,
              private router: Router) {}

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.cargarDatosProductos();
    this.newLista();
  }

  cargarDatosProductos(){
    this.listPedido.$getListSource.subscribe(
      data => {
        //console.log(data);
        this.list = data;
      }
    ).unsubscribe(); 
  }

  abrirModalDirecciones(){

  }

  irProductos(){
    this.router.navigate(['/tabs/tab1']);
  }

  newLista(){
    this.listBagRef = []; //resetea la lista agrupada
    this.list.forEach(elem =>{
      if(!this.listBagRef.find(d => d.producto.codigo == elem.codigo)){ //busca en la lista agrupada si existe un producto
        let cant = this.list.filter( fil => fil.codigo == elem.codigo).length; //# de veces que se repite el producto en la lista
        let total = elem.precio * cant;
        let producto = JSON.parse(JSON.stringify(elem)); //asegura el parseo de un objeto tipo producto
        this.listBagRef.push({cant, producto, total});
      }
    });
    //console.log(this.listBagRef);
  }

}
