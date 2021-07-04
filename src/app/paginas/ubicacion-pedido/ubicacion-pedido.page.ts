import { MenuController } from '@ionic/angular';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-ubicacion-pedido',
  templateUrl: './ubicacion-pedido.page.html',
  styleUrls: ['./ubicacion-pedido.page.scss'],
})
export class UbicacionPedidoPage implements OnInit {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number= -2.2433979;
  lng: number= -80.9318224;
  zoom = 14.5;

  constructor(private menuCtrl: MenuController) { 
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.swipeGesture(false, 'primerMenu');
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  ionViewDidEnter(){
    /* this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl()); */
  }

}
