import { environment } from './../../../environments/environment';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-pedidos-rep',
  templateUrl: './pedidos-rep.page.html',
  styleUrls: ['./pedidos-rep.page.scss'],
})
export class PedidosRepPage implements OnInit {

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
