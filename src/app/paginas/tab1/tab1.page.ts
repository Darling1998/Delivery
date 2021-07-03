import { ModalAddressPage } from './../modal-address/modal-address.page';
import { ModalController } from '@ionic/angular';
import { ProductosService } from './../../servicios/productos.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(private proSer: ProductosService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.type = 'cervezas';
    this.cargarCervezas();
  }

  segmentChanged(ev: any) {
    this.listPro = [];
    //Carga la data con la categoria
    if(ev.detail.value == 'cervezas'){
      this.cargarCervezas();
    } else if(ev.detail.value == 'licores'){
      this.cargarLicores();
    } else{
      this.cargarPiqueos();
    }
  }

  cargarCervezas(){
    this.proSer.getCervezas().subscribe(
      data => {
        console.log(data);
        this.listPro = data;
      }
    );
  }

  cargarLicores(){
    this.proSer.getLicores().subscribe(
      data => {
        console.log(data);
        this.listLic = data;
      }
    );
  }

  cargarPiqueos(){
    this.proSer.getPiqueos().subscribe(
      data => {
        console.log(data);
        this.listPiq = data;
      }
    );
  }

  buscarPro(event){
    this.textBuscar = event;
  }

  async abrirModalDirecciones(){
    const modal = await this.modalCtrl.create({
      component: ModalAddressPage,
      backdropDismiss: true,
      cssClass: 'options_modal',
    });
    return await modal.present();
  }
}
