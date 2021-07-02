import { ParametersService } from './../../servicios/parameters.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  numProductos: number = 0;
  subscription: Subscription;

  constructor(private totPedido: ParametersService) {
    this.totalPedido();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  
  }

  totalPedido(){
    this.subscription = this.totPedido.$getListSource.subscribe(
      data =>{
        //console.log(data);
        this.numProductos = data.length;
      }
    );
  }
}
