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

}
