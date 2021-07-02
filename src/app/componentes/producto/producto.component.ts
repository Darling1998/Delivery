import { ParametersService } from './../../servicios/parameters.service';
import { Producto } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  listPro: Producto[] = [];
  listBag: Producto[] = [];
  subscription: Subscription;

  @Input() product: Producto;

  constructor(private paramSer: ParametersService) { }

  ngOnInit() {
    this.subscription = this.paramSer.$getListSource.subscribe(data => {
      this.listBag = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addProducto(item) {
    this.listBag.push(item);
    this.paramSer.enviarList(this.listBag);
    //console.log(this.listBag);
  }
}
