import { ParametersService } from './../../servicios/parameters.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  numProductos: number = 0;

  constructor(private totPedido: ParametersService) {
    this.totalPedido();
  }

  totalPedido(){
    this.totPedido.$getListSource.subscribe(
      data =>{
        //console.log(data);
        this.numProductos = data.length;
      }
    );
  }
}
