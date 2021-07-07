import { IDirecciones } from './../../interfaces/interfaces';
import { DireccionesService } from './../../servicios/direcciones.service';
import { ModalAddressPage } from './../modal-address/modal-address.page';
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
  listDirecciones: IDirecciones[]=[]; //Listado de direcciones generales
  listSelecionado: IDirecciones[]=[]; //muestra la direccion escogida 
  id_cliente: number;
  @ViewChild(IonSearchbar) searchbar: IonSearchbar;

  constructor(private proSer: ProductosService, 
              private modalCtrl: ModalController, 
              private menuCtrl: MenuController,
              private dirSer: DireccionesService) { }

  ngOnInit() {
    this.type = 'cervezas';
    this.id_cliente = JSON.parse(localStorage.getItem('info'))['idCliente'];
    this.cargarCervezas();
    this.cargarDirecciones();
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

  cargarDirecciones(){
    this.dirSer.getDireccionesDB(this.id_cliente).subscribe(
      data => {
        console.log(data);
        this.listDirecciones = data;
      }
    );
  }

  cargarCervezas(){
    this.proSer.getCervezas().subscribe(
      data => {
        this.listPro = data;
      }
    );
  }

  cargarLicores(){
    this.proSer.getLicores().subscribe(
      data => {
        this.listLic = data;
      }
    );
  }

  cargarPiqueos(){
    this.proSer.getPiqueos().subscribe(
      data => {
        this.listPiq = data;
      }
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
  
    console.log(data.idRadio)
    this.listDirecciones = data.listado;
    this.dirSer.getDirrecionSeleccionda(this.id_cliente, data.idRadio).subscribe(
      data => { this.listSelecionado = data; }
    )
  }
}
