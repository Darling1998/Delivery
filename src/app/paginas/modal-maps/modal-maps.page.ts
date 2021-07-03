import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-maps',
  templateUrl: './modal-maps.page.html',
  styleUrls: ['./modal-maps.page.scss'],
})
export class ModalMapsPage implements OnInit {
  @Input() lat;
  @Input() lng;
  dirForm: FormGroup;
  nombre: string="";
  
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(private modalCtrl:ModalController, private fb: FormBuilder) { 
    this.mapbox.accessToken = environment.mapbox.accessToken;
    this.createForm();
  }

  ngOnInit() {
    this.renderMap();
  }

  createForm(){
    this.dirForm = this.fb.group({
      nombre: ['', Validators.required]
    })
  }

  renderMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 15,
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

  registro(){
    
  }


  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
