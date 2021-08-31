import { ParametersService } from './../../servicios/parameters.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  numProductos: number = 0;
  subscription: Subscription;
  userId: number = 0;

  constructor(private totPedido: ParametersService) {
    this.totalPedido();
  }
  
  ngOnInit(){
    this.loadID();
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

  loadID(){
   let obj = JSON.parse(localStorage.getItem("info"));
   this.userId = obj.idRole;
   console.log();
  }
}
