import { ModalMapsPage } from './../modal-maps/modal-maps.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mis-ubicaciones',
  templateUrl: './mis-ubicaciones.page.html',
  styleUrls: ['./mis-ubicaciones.page.scss'],
})
export class MisUbicacionesPage implements OnInit {
  latitud: number= 0;
  longitud: number = 0;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirMapa(){
    await this.getLocation();
    const mapa = await this.modalCtrl.create({
      component: ModalMapsPage,
      componentProps: {
        lat: this.latitud,
        lng: this.longitud
      }
    });
    await mapa.present();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
    console.log(position)
  }

}
