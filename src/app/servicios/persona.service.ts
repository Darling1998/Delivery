import { webservice } from './../global-variables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  path_base = webservice;

  constructor( private http:HttpClient) { }

  iniciarSeccion(data: any){
    let json = JSON.stringify(data);
    const URL = this.path_base + 'persona/iniciarSeccion.php';
                 
    //El backend recogerá un parametro json
    let params = "data=" + json;

    //Establecemos cabeceras
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
    return this.http.post<any>(URL, params, {headers: headers});
  }
}
