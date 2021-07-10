import { DireccionesService } from './../../servicios/direcciones.service';
import { ModalAddressPage } from './../../paginas/modal-address/modal-address.page';
import { ModalController } from '@ionic/angular';
import { IDirecciones } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss'],
})
export class DireccionesComponent implements OnInit {
  listDirecciones: IDirecciones[]=[]; //Listado de direcciones generales
  listSelecionado: IDirecciones[]=[]; //muestra la direccion escogida 
  id_cliente: number;

  constructor(private modalCtrl: ModalController, private dirSer: DireccionesService) { }

  ngOnInit() {
    this.id_cliente = JSON.parse(localStorage.getItem('info'))['idCliente'];
    this.cargarDirecciones(this.id_cliente);
  }

  cargarDirecciones(id_cli){
    this.dirSer.getDireccionesDB(id_cli).subscribe(
      data => { this.listDirecciones = data; }
    );
  }

  async abrirModalDirecciones(){
    const modal = await this.modalCtrl.create({
      component: ModalAddressPage,
      componentProps: {
        direcciones: this.listDirecciones,
        id_cli: this.id_cliente
      },
      backdropDismiss: true,
      cssClass: 'options_modal'
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data){
      this.cargarDirecciones(this.id_cliente); //refrezca las direcciones
      if(data.idRadio != null){
        this.dirSer.getDirrecionSeleccionda(this.id_cliente, data.idRadio).subscribe(
          data => { this.listSelecionado = data; }
        );
      }
    }
  }

}