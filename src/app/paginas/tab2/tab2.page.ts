import { Router } from '@angular/router';
import { Producto, IDetallePedido } from './../../interfaces/interfaces';
import { ParametersService } from './../../servicios/parameters.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  list: Producto[] = [];
  listBagRef: IDetallePedido[]=[];
  subscription: Subscription;

  options = {
    centeredSlides: true,
    slidesPerView: 1.1,
    spaceBetween: -100,
  };

  constructor(private listPedido: ParametersService,
              private router: Router) {}

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ionViewWillEnter(){
    this.cargarDatosProductos();
    this.newLista();
  }

  cargarDatosProductos(){
    this.subscription = this.listPedido.$getListSource.subscribe(
      data => {
        //console.log(data);
        this.list = data;
      }
    ); 
  }

  abrirModalDirecciones(){

  }

  irProductos(){
    this.router.navigate(['/tabs/tab1']);
  }

  newLista(){
    this.listBagRef = []; //resetea la lista agrupada
    this.list.forEach(elem =>{
      if(!this.listBagRef.find(d => d.producto.idProducto == elem.idProducto)){ //busca en la lista agrupada si existe un producto
        let cant = this.list.filter( fil => fil.idProducto == elem.idProducto).length; //# de veces que se repite el producto en la lista
        let total = elem.precio_venta * cant;
        let producto = JSON.parse(JSON.stringify(elem)); //asegura el parseo de un objeto tipo producto
        this.listBagRef.push({cant, producto, total});
      }
    });
    //console.log(this.listBagRef);
  }

  calcularTotal(){
    return this.listBagRef.map(d => d.total).reduce((a, b) => a + b, 0);
  }

  eliminarProducto(item){
    this.listBagRef = this.listBagRef.filter(std => std.producto.idProducto != item.producto.idProducto);
    this.list = this.list.filter(std => std.idProducto != item.producto.idProducto);
    this.listPedido.enviarList(this.list); //Actualiza el badge de productos
  }
}
