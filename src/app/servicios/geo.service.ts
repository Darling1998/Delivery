import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  latitud:number;
  longitud:number;
  constructor() { }

  async geolocalizacion(){
    const posicion=await Geolocation.getCurrentPosition();
    this.latitud=posicion.coords.latitude;
    this.longitud=posicion.coords.longitude;
    const obj:any={latitud:this.latitud, longitud:this.longitud}

    console.log(obj);
    localStorage.setItem('posicion',obj);

  }
}

