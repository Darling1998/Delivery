import { IonSearchbar, MenuController, ModalController } from '@ionic/angular';
import { ProductosService } from './../../servicios/productos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  type: string;
  listPro: Producto[]=[];
  listLic: Producto[]=[];
  listPiq: Producto[]=[];
  listBag: Producto[]=[];
  textBuscar: string = ""; 
  @ViewChild(IonSearchbar) searchbar: IonSearchbar;

  constructor(private proSer: ProductosService,  
              private menuCtrl: MenuController) { }

  ngOnInit() {
    this.type = 'cervezas';
    this.cargarCervezas();
  }

  ionViewWillEnter(){
    this.menuCtrl.swipeGesture(false, 'principal');
  }

  buscar(event){
    this.textBuscar = event.detail.value;
  }

  segmentChanged(ev: any) {
    this.listPro = []; 
    this.textBuscar = "";
    this.searchbar.value = ""; //Resetea el valor del input
    if(ev.detail.value == 'cervezas'){ //Carga la data con la categoria
      this.cargarCervezas();
    } else if(ev.detail.value == 'licores'){
      this.cargarLicores();
    } else{
      this.cargarPiqueos();
    }
  }

  cargarCervezas(){
    this.proSer.getCervezas().subscribe(
      data => { this.listPro = data; }
    );
  }

  cargarLicores(){
    this.proSer.getLicores().subscribe(
      data => { this.listLic = data; }
    );
  }

  cargarPiqueos(){
    this.proSer.getPiqueos().subscribe(
      data => { this.listPiq = data; }
    );
  }
}
