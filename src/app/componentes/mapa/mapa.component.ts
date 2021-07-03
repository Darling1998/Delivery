import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number= -2.2433979;
  lng: number= -80.9318224;
  zoom = 16.6;

  constructor() {
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.crearMarcador(this.lng, this.lat);
  }

  crearMarcador(lng: number, lat: number){
    const marker = new mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng, lat])
    .addTo(this.map);

    marker.on('drag', () => {
      console.log(marker.getLngLat());
    })
  }

}
