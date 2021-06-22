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
  listCart: Producto[] = [];
  constructor(private router: Router,

    private paramSer: ParametersService) { }

  ngOnInit() {
    this.type = 'cervezas';
    this.paramSer.$getListSource.subscribe(data => {
      this.listCart = data;

    }).unsubscribe();


  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);

  }

  irCarrito() {
    this.paramSer.enviarList(this.listCart);
    this.router.navigate(['/carrito']);
  }



  totalCarrito(): number {
    return this.listCart.length;
  }

  submit(){
    
  }
}
