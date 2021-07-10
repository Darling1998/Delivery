import { DireccionesService } from './../../servicios/direcciones.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() direcciones;
  @Input() id_cli;
  idSeleccionado: number = null;

  constructor(private modalCtrl: ModalController, private dirSer: DireccionesService) { }

  ngOnInit() {
    console.log(this.direcciones, this.id_cli);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      idRadio: this.idSeleccionado
    });
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    if(position){
      this.inhabilitarInput = false;
    }
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
    console.log(position);
  }

  addAddress(){
    //insert en la bd
    const dir = { idCliente: this.id_cli, latitud: this.latitud, longitud: this.longitud, detalle: this.name };
    console.log(dir);
    
    this.dirSer.createDireccion(dir).subscribe(
      data => {
        if(data['status'] == "success"){
          this.direcciones = [];
          this.name = "";
          this.dirSer.getDireccionesDB(this.id_cli).subscribe(
            data => { this.direcciones = data; }
          );
        }
      }
    );
  }

  seleccionRadio(event){
    this.idSeleccionado = event.detail.value;
    //console.log(event);
  }

}
