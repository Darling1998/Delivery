import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-modal-address',
  templateUrl: './modal-address.page.html',
  styleUrls: ['./modal-address.page.scss'],
})
export class ModalAddressPage implements OnInit {
  latitud: number = 0;
  longitud: number = 0;
  inhabilitarInput: boolean = true;
  name: string = "";

  listAddress:any[]=[
    {id: 1, nombre: "Mi casa", latitud:-2.2433979, longitud:-80.9318224},
    {id: 2, nombre: "Mi oficina", latitud:-2.2433979, longitud:-80.9318224},
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    if(position){
      this.inhabilitarInput = false;
    }
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
    console.log(position)
  }

  addAddress(){
    console.log({id:3, nombre: this.name, longitud: this.longitud, latitud: this.longitud})
    this.listAddress.push({id:3, nombre: this.name, longitud: this.longitud, latitud: this.longitud});
  }

}
