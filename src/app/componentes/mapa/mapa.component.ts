import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat:number;
  lng :number;
  zoom = 15;

  constructor( ) {
    this.mapbox.accessToken = environment.mapbox.accessToken;
   }


 async  ngOnInit() {
   
    const posicion=await Geolocation.getCurrentPosition();
    this.lat=posicion.coords.latitude;
    this.lng=posicion.coords.longitude;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    var marker = new mapboxgl.Marker()
    .setLngLat([this.lng,this.lat])
    .addTo(this.map);

  }
 
}
